import { configureStore } from "@reduxjs/toolkit";
import CreateJobSlice from "./slices/CreateJobSlice";
import CreateOrgSlice from "./slices/CreateOrgSlice";
import CreateCandidateSlice from "./slices/CreateCandidateSlice";
import loginslice from "./slices/Loginslice";
import RegisterSlice from "./slices/RegisterSlice";
import Forgotpassword from "./slices/Forgotpassword";
import ResetpasswordSlice from "./slices/ResetpasswordSlice";
import Authslice from "./slices/Authslice";
import jobApi from "../app/api/JobApi";
import OrgApi from "../app/api/OrgApi";
import AddressSlice from "./slices/AddressSlice";
import CandidateApi from "./api/CandidateApi";
import authApi from "./api/authApi";


 const store = configureStore ({
    reducer:{
      [jobApi.reducerPath]: jobApi.reducer,
      [OrgApi.reducerPath]: OrgApi.reducer,
      [CandidateApi.reducerPath]: CandidateApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      auth:Authslice,
      createnewpassword:ResetpasswordSlice,
      CreateJob:  CreateJobSlice,
      CreateOrg : CreateOrgSlice, 
      CreateCandidate : CreateCandidateSlice,
      login:loginslice,
      register:RegisterSlice,
      forgot:Forgotpassword,
      address:AddressSlice
      
    },middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      jobApi.middleware,
      OrgApi.middleware, 
      CandidateApi.middleware, 
      authApi.middleware, 
    )
})
export default store;