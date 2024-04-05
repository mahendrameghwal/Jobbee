import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User:{
        email:''
    }
  
};
const forgotpassword = createSlice({
  name: "forgotpassword",
  initialState,
  reducers: {
    Setemail(state, action) {
        state.User = { ...state.User, ...action.payload };
    },
    ResetEmail (){
      return initialState
    }
  },
});

export const {
    Setemail  ,ResetEmail
} = forgotpassword.actions;

export default forgotpassword.reducer;
