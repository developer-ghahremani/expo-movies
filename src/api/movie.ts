import { ApiResponse, Genre, Movie } from "@models";

import api from "./";
import { endpoints } from "@constants";

export const getGenres = () =>
  api.get<ApiResponse<Genre[], null>>(endpoints.movie.genres);

interface GetMoviesProps {
  genres?: string;
}
export const getMovies = ({ genres }: GetMoviesProps) =>
  api.get<ApiResponse<Movie[], null>>(endpoints.movie.list, {
    params: { genres },
  });
