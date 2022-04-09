import { ApiResponse, Genre, Movie, MovieTrailer, MovieYear } from "@models";
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
    getMovieYear: build.query<ApiResponse<MovieYear[], null>, void>({
      query: () => ({ url: "/years", params: { page: 1, limit: 10 } }),
    }),
    getMovieGenres: build.query<ApiResponse<Genre[], null>, void>({
      query: () => ({ url: "/genres" }),
    }),
    getMovieDetail: build.query<ApiResponse<null, Movie>, { id: string }>({
      query: ({ id }) => ({ url: `/movie/${id}` }),
    }),
    getMovieTrailers: build.query<
      ApiResponse<null, MovieTrailer[]>,
      { movieId: string }
    >({
      query: ({ movieId }) => ({ url: `/trailers/${movieId}` }),
    }),
    getMovies: build.query<
      ApiResponse<Movie[], null>,
      {
        pages?: number;
        limit?: number;
        type?: string;
        genres?: string;
        year?: string;
      }
    >({
      query: (params) => ({ url: "/movies", params }),
    }),
  }),
});

export default service;
export const {
  useGetMovieDetailQuery,
  useGetMovieTrailersQuery,
  useGetMoviesQuery,
  useGetMovieGenresQuery,
  useGetMovieYearQuery,
} = service;
