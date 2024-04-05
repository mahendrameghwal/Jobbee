
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/api/user' }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: (User) => ({
        url: '/login',
        method: 'POST',
        body: User,
        headers: {'Content-Type': 'application/json'},
        credentials:"include"
      }),
    }),
    Register: builder.mutation({
      query: (User) => ({
        url: '/register',
        method: 'POST',
        body: User,
        headers: {'Content-Type': 'application/json'},
      }),
    })
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;

export default authApi;
