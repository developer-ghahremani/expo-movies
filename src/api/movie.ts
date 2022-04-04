import { ApiResponse, Genre } from "@models";

import api from "./";
import { endpoints } from "@constants";

export const getGenres = () =>
  api.get<ApiResponse<Genre[]>>(endpoints.movie.genres);
