import React, { Fragment, lazy, Suspense , useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gotop from "./components/Gotop";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import LoginPopup from "./components/Loginpopup";
import Errorboundrypage from "./pages/error/Errorboundrypage";





// import { publicRoutes, privateRoutes } from "./routes/routes";
// Lazy-loaded components
const Home = lazy(() => import("./pages/Home")); //public
const BrowseCompanies = lazy(() => import("./pages/BrowseCompnies"));//public
const CompanyProfile = lazy(() => import("./pages/CompanyProfile"));//public
const ErrorPage = lazy(() => import("./pages/ErrorPage"));//public
const FindJobs = lazy(() => import("./pages/FindJobs"));//public
const ViewApplication = lazy(() => import("./pages/ViewApplication"));//private
const AboutJob = lazy(() => import("./pages/AboutJob"));//public
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const CreateOrg = lazy(() => import("./forms/organization/CreateOrg"));//private
const ShortListCandidate = lazy(() => import("./pages/ShortlistCandidate/ShortListCandidate"));//private
const ResetPassword = lazy(() => import("./pages/ResetPassword"));//public
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));//public
const CreateCandidate = lazy(() => import("./forms/candidate/CreateCandidate"));//private
const CandidateProfile = lazy(() => import("./pages/CandidateProfile"));//public
const UpdateProfile = lazy(() => import("./pages/Update/UpdateProfile"));//private
const Createjob = lazy(() => import("./forms/job/CreateJob"));//private
const DeleteAcount = lazy(() => import("./pages/DeleteAcount"));//private
const ErrorMessage = lazy(() => import("./pages/ErrorMessage"));//public
// import {jwtDecode} from "jwt-decode";
function App() {



  // useEffect(() => {
  //   const getCookie = () => {
  //     const cookieMatch = document.cookie.match(/(?:^|;)\s*accesstoken=([^;]+)/);
  //     const accessToken = cookieMatch ? cookieMatch[1] : null;
  //     console.log('Access Token:', accessToken);
  //   };

  //   getCookie();
  // }, []);

  return (
  <ErrorBoundary FallbackComponent={Errorboundrypage}>
    <Fragment>
    <Suspense fallback={<Loader/>}>
    <LoginPopup/>
    <main role="main" className="min-h-screen max-h-full">
      <Toaster
        position="top-center"
        toastOptions={{
          className: "text-white tracking-wider bg-gray-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-base rounded-lg text-sm px-3 py-0 text-center mr-2 mt-10",
        }}
      />
      <Navbar />
     
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/browsecompanies" element={<BrowseCompanies />} />
          <Route path="/browsecompanies/profile/:id" element={<CompanyProfile />} />
          <Route path="user/profile/:id" element={<CandidateProfile />} />
          <Route path="user/updateprofile/:id" element={<UpdateProfile />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/findjobs/job-description/:jobid" element={<AboutJob />} />
          <Route path="/view" element={<ViewApplication />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-company" element={<CreateOrg />} />
          <Route path="/create-candidate" element={<CreateCandidate />} />
          <Route path="/createjob" element={<Createjob />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetnewpassword/:token" element={<ResetPassword />} />
          <Route path="/delete-acount/:token" element={<DeleteAcount />} />
          <Route path="/statistic/:jobid" element={<ShortListCandidate />} />
          <Route path="/error-message" element={<ErrorMessage />} />
          <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Gotop />
          <Footer />
          </main>
          </Suspense>
          </Fragment>
          </ErrorBoundary>
  );
}

export default App;
