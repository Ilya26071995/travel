import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    getNotes: build.query({
      query: () => "/",
    }),
    createNote: build.mutation({
      query: (note) => ({
        body: note,
        url: "/",
        method: "POST",
      }),
    }),
  }),
});

// export const { useGetNotesQuery } = api;
