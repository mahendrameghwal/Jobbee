const Home = lazy(() => import("../pages/Home")); //public
const BrowseCompanies = lazy(() => import("../pages/BrowseCompnies"));//public
const CompanyProfile = lazy(() => import("../pages/CompanyProfile"));//public
const ErrorPage = lazy(() => import("../pages/ErrorPage"));//public
const FindJobs = lazy(() => import("../pages/FindJobs"));//public
const ViewApplication = lazy(() => import("../pages/ViewApplication"));//private
const AboutJob = lazy(() => import("../pages/AboutJob"));//public
const CreateOrg = lazy(() => import("../forms/organization/CreateOrg"));//private
const ShortListCandidate = lazy(() => import("../pages/ShortlistCandidate/ShortListCandidate"));//private
const ResetPassword = lazy(() => import("../pages/ResetPassword"));//public
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));//public
const CreateCandidate = lazy(() => import("../forms/candidate/CreateCandidate"));//private
const CandidateProfile = lazy(() => import("../pages/CandidateProfile"));//public
const UpdateProfile = lazy(() => import("../pages/Update/UpdateProfile"));//private
const Createjob = lazy(() => import("../forms/job/CreateJob"));//private
const DeleteAcount = lazy(() => import("../pages/DeleteAcount"));//private
const ErrorMessage = lazy(() => import("../pages/ErrorMessage"));//public




export const PublicRoutes = [
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/browsecompanies",
    element: <BrowseCompanies />,
  },
  {
    path: "browsecompanies/profile/:id",
    element: <CompanyProfile />,
  },
  {
    path: "/findjobs",
    element: <FindJobs />,
  },
  {
    path: "/findjobs/job-description/:jobid",
    element: <AboutJob />,
  },
  {
    path: "/resetnewpassword/:token",
    element: <ResetPassword />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "user/profile/:id",
    element: <CandidateProfile />,
  },
  {
    path: "/error-message",
    element: <ErrorMessage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  }
];

export const PrivateRoutes = [
  {
    path: "/view",
    element: <ViewApplication />,
  },

  {
    path: "/create-company",
    element: <CreateOrg />,
  },
  {
    path: "/statistic/:jobid",
    element: <ShortListCandidate />,
  },
  {
    path: "/create-candidate",
    element: <CreateCandidate />,
  },
  {
    path: "user/updateprofile/:id",
    element: <UpdateProfile />,
  },
  {
    path: "/access-denied",
    element: <Createjob />,
  },
  {
    path: "/delete-acount/:token",
    element: <DeleteAcount />,
  },
];