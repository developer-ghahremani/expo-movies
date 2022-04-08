import { ApiResponse, Movie, MovieTrailer } from "@models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseURL } from "@constants";

const service = createApi({
  reducerPath: "serviceAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Host", `movies-app1.p.rapidapi.com`);
      headers.set(
        "X-RapidAPI-Key",
        `b19737d686mshf8e2db779e3fd54p15e62ajsn21cb568ba8de`
      );

      return headers;
    },
  }),
  endpoints: (build) => ({
    getMovieDetail: build.query<ApiResponse<null, Movie>, { id: string }>({
      query: ({ id }) => ({ url: `/movie/${id}` }),
    }),
    getMovieTrailers: build.query<
      ApiResponse<null, MovieTrailer[]>,
      { movieId: string }
    >({
      query: ({ movieId }) => ({ url: `/trailers/${movieId}` }),
    }),
  }),
});

export default service;
export const { useGetMovieDetailQuery, useGetMovieTrailersQuery } = service;
