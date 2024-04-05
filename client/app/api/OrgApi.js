import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-hot-toast';

export const orgApi = createApi({
  reducerPath: 'orgApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8800/api/org' }),
  refetchOnReconnect: true, refetchOnMountOrArgChange:true,
  providesTags: ['org','job'],
  endpoints: (builder) => ({
    createorg: builder.mutation({
      query: (FormData) => ({
        url: '/create',
        method: 'POST',
        body: FormData,
        headers: {'Content-Type': 'application/json'},
        credentials:"include"
      }),
      invalidatesTags:  ['org'],
    }),
    getOrg: builder.query({
      query: () => '/getall/org', 
     providesTags:  ['org'],
    }),
    orgbyid: builder.query({
      query: (id) => `/getorg/${id}`, 
      providesTags: (result) =>
      Array.isArray(result)
        ? [
            ...result.map(({ id }) => ({ type: 'org'})),
            { type: 'org' },
          ]
        : [{ type: 'org' }],
      
    }),
   
    DeletePersonalJob: builder.mutation({
      query: (id) => ({
        url: `/job/delete/${id}`,
        method: 'DELETE',
        credentials: "include"
      }),
      invalidatesTags:  ['org'],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const deleteresult = dispatch(
          orgApi.util.updateQueryData("orgbyid", undefined, (orgdata) => {
            const orgindex = orgdata.findIndex((el) => el.id === id);
            orgdata.splice(orgindex, 1);
          
          }),
        );
        try {
          const enddata=  await queryFulfilled;
          console.log(enddata);
        } catch {
          deleteresult.undo();
        }
      },
    }),
  }),
});


export const { useGetOrgQuery, useCreateorgMutation, useOrgbyidQuery, useDeletePersonalJobMutation } = orgApi; 

export default orgApi;
