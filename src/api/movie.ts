import { ApiResponse, Genre, Movie } from "@models";

import api from "./";
import { endpoints } from "@constants";

export const getGenres = () =>
  api.get<ApiResponse<Genre[]>>(endpoints.movie.genres);

interface GetMoviesProps {
  genres?: string;
}
export const getMovies = ({ genres }: GetMoviesProps) =>
  api.get<ApiResponse<Movie[]>>(endpoints.movie.list, { params: { genres } });
