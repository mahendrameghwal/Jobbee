import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import jobApi from './JobApi';


export const CandidateApi = createApi({
  reducerPath: 'CandidateApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/api/candidate' }),
  tagTypes: ["candidate", "job"],
  
  endpoints: (builder) => ({
    GetCandidate: builder.query({
      query: () => '/getall/candidate', 
      providesTags: ["candidate"],
    }),
    SingleCandidate: builder.query({
        query: (id) => `/get/${id}`, 
        providesTags: ["candidate"],
      }),
    createCadidate: builder.mutation({
      query: (data) => (
        {
        url: '/create',
        method: 'POST',
        body: data,
        headers: {'Content-Type': 'application/json'},
        credentials:"include"
      }),
      invalidatesTags: ["candidate"]
    }),
    ApplyforJob: builder.mutation({
      query: (id) => ( {
        url: `/apply/${id}`,
        method: 'PATCH',
        credentials:"include"
      }),
      invalidatesTags: ["candidate"]
    }),
  }),
});

export const { useGetCandidateQuery, useCreateCadidateMutation, useSingleCandidateQuery, useApplyforJobMutation} = CandidateApi; 
export default CandidateApi;
