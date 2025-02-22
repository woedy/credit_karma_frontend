import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';

import DefaultLayout from './layout/DefaultLayout';
<<<<<<< HEAD
import PageTitle from './components/PageTitle';
import LoginPageRepeat from './pages/UserData/LoginPageRepeat';
import BasicInfoPage from './pages/UserData/BasicInfoPage';
import HomeAddressPage from './pages/UserData/HomeAddressPage';
import SocialSecurityPage from './pages/UserData/SocialSecurityPage';
import SocialSecurityRepeatPage from './pages/UserData/SocialSecurityRepeatPage';
import TermsPage from './pages/UserData/TermsPage';
import ULgn1 from './pages/session/ULgn1';

const hiddenOnRoutes = ['/', '/login', '/basic-info', '/home-address', '/social-security', '/social-security-error', "/terms-conditions"];
=======
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Delivery from './pages/Delivery/Delivery';
import Selection from './pages/Delivery/Selection';
import Billing from './pages/Delivery/Billing';
import PaymentMethod from './pages/Delivery/Payment_method';
import Overview from './pages/Delivery/Overview';
import Invoice from './pages/Delivery/Invoice';
import TrackingInitiated from './pages/Tracking/TrackingInitiated';
import TrackingPacked from './pages/Tracking/TrackingPacked';
import TrackingTransit from './pages/Tracking/TrackingTransit';
import TrackingDelivery from './pages/Tracking/TrackingDelivery';
import LandingPage from './pages/LandingPage/LandingPage';

const hiddenOnRoutes = [ '/signup', '/signin'];
>>>>>>> 155d9976c574bb6db535ecf1dddc07369508336b

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  
  const [isAllowed, setIsAllowed] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout pathname={pathname} hiddenOnRoutes={hiddenOnRoutes}>
      <Routes>
        <Route
          path="/"
          element={
            <>
<<<<<<< HEAD
              <PageTitle title="" />
              <ULgn1 />
=======
              <PageTitle title="Welcome To Gold Palace" />
              <LandingPage />
>>>>>>> 155d9976c574bb6db535ecf1dddc07369508336b
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <PageTitle title="Log in - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <LoginPageRepeat />
            </>
          }
        />

        <Route
          path="/basic-info"
          element={
            <>
              <PageTitle title="Baisc info - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <BasicInfoPage />
            </>
          }
        />

        <Route
          path="/home-address"
          element={
            <>
              <PageTitle title="Home Address info - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <HomeAddressPage />
            </>
          }
        />

<Route
          path="/social-security"
          element={
            <>
              <PageTitle title="Social Security - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <SocialSecurityPage />
            </>
          }
        />


<Route
          path="/social-security-error"
          element={
            <>
              <PageTitle title="Social Security - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <SocialSecurityRepeatPage />
            </>
          }
        />



<Route
          path="/terms-conditions"
          element={
            <>
              <PageTitle title="Terms & Conditions - Free Credit Score & Free Credit Reports With Monitoring | Credit Karma | Credit Karma" />
              <TermsPage />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
