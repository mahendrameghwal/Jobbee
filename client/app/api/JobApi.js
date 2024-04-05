
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/api/job' }),
  refetchOnMountOrArgChange:true,
  tagTypes: ["job", "org"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => '/getall/jobs', 
      providesTags: ["job"],
      transformResponse: (jobs) => jobs.reverse(),
      refetchOnMountOrArgChange: true,
    }),
    getJobById: builder.query({
      query: (id) => `/getjob/${id}`, 
      providesTags: ["job"],
    }),
    createJob: builder.mutation({
      query: (FormData) => ({
        url: '/create',
        method: 'POST',
        body: FormData,
        headers: {'Content-Type': 'application/json'},
        credentials:"include"
      }),
      invalidatesTags: ['job', 'org'],
     
    }),
  }),
});

export const { useGetJobsQuery, useCreateJobMutation , useGetJobByIdQuery} = jobApi;

export default jobApi;
