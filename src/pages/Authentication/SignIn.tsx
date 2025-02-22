import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Logo from '../../images/logo/geyhey_logo.png';
import { baseUrl } from '../../constants';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fcm_token, setFcmtoken] = useState('sddfdsfdsfsdf');
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) {
      return;
    }

    const url = baseUrl + 'api/accounts/login-user/';
    const data = {
      email,
      password,
      fcm_token,
    };

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json(); // Parse response body as JSON

      if (response.status === 200) {
        // Login successful, store user data and token in local storage
        localStorage.setItem('first_name', responseData.data.first_name);
        localStorage.setItem('last_name', responseData.data.last_name);
        localStorage.setItem('user_id', responseData.data.user_id);
        localStorage.setItem('email', responseData.data.email);

        localStorage.setItem('photo', responseData.data.photo);

        localStorage.setItem('token', responseData.data.token);

        // Redirect to dashboard or perform other actions
        console.log('Login successful');
        console.log(responseData.data.token);
        navigate('/dashboard');
        window.location.reload();

      } else if (response.status === 400) {
        setEmailError(
          responseData.errors.email ? responseData.errors.email[0] : '',
        );
        setPasswordError(
          responseData.errors.password ? responseData.errors.password[0] : '',
        );
      } else {
        // Login failed, display error message
        console.error('Login failed:', responseData.message);
      }
    } catch (error) {
      // Network or other errors
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Sign In" />
  
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
    {/* Left Section */}
<div className="hidden xl:block xl:w-1/2 bg-primary h-[500px]">
  <div className="flex items-center justify-center h-full px-6 py-8 text-center">
    <div>

    <img
                      src="https://png.pngtree.com/png-vector/20231026/ourmid/pngtree-realistic-gold-bars-png-image_10370401.png"
                      alt="logo"
                        className="w-50 h-50 mr-2 rounded-full object-cover"
                      />
      <h2 className="text-3xl font-bold text-white mb-2">Gold Palace</h2>
      <p className="text-white">
        We protect your gold
      </p>
    </div>
  </div>
</div>

  
          {/* Right Section */}
          <div className="w-full xl:w-1/2 xl:border-l-2 border-stroke dark:border-strokedark">
            <div className="w-full p-4 sm:p-12 xl:p-16">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Gold Palace
              </h2>
  
              {emailError && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
                  role="alert"
                >
                  <strong className="font-bold">Error!</strong>
                  <span className="block sm:inline"> {emailError}</span>
                </div>
              )}
  
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
  
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Re-type Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <span className="absolute right-4 top-4">
                      <svg
                        className="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.5">
                          <path
                            d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                            fill=""
                          />
                          <path
                            d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                            fill=""
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
  
                <div className="mb-5">
                  {loading ? (
                    <div role="status" className="flex flex-col items-center justify-center h-full space-y-4">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.526 12.5 75.0004 12.5C69.2135 12.5 63.5476 14.8242 58.7359 18.2496C52.6344 22.214 47.3305 28.6221 44.4575 36.0113C43.3799 38.6195 45.3567 41.4138 48.0275 41.3935C50.6983 41.3731 53.1951 38.7531 54.0415 36.4167C56.4216 30.5124 60.9733 26.5342 66.2778 25.5126C72.039 24.4402 77.4847 27.2353 79.0068 32.3967C79.4685 34.3598 82.0316 35.2739 83.6415 34.7333C85.2515 34.1927 86.1657 31.6297 85.6249 29.0199C84.6697 24.3613 81.7378 21.1148 78.2994 19.5747C75.1246 18.2127 71.6611 18.2346 68.3747 19.6183C62.3968 22.3489 58.1982 27.2095 55.5131 32.5572C54.7955 34.2886 56.7913 36.3257 58.8104 35.9612C63.2647 34.9409 67.3182 36.8883 71.2412 40.2061C76.7409 44.8175 80.3467 50.7715 81.9351 56.9515C83.3638 61.3201 87.9193 63.5164 92.4152 61.6915C94.5364 60.5801 96.507 59.1501 97.7872 57.5108C99.2395 55.7934 99.4823 53.0506 98.6238 50.6545C97.8843 48.3114 95.5928 46.7144 93.9676 45.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="text-gray-400">Logging in your account...</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-lg border border-primary bg-primary py-4 text-center text-base font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary dark:hover:bg-opacity-90"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default SignIn;
