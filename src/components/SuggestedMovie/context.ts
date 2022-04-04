import { Genre, Movie } from "@models";

interface SuggestedMovieAction {
  type: "setGenres" | "setSelectedGenre" | "showLoadingMovies" | "setMovies";
  payload?: any;
}

interface SuggestedMovieState {
  genres: Genre[];
  selectedGenre?: Genre;
  loadingGenre?: boolean;
  loadingMovies?: boolean;
  movies: Movie[];
}

export const suggestedMovieInitialState: SuggestedMovieState = {
  genres: [],
  movies: [],
};

export const suggestedMovieReducer = (
  state = suggestedMovieInitialState,
  { payload, type }: SuggestedMovieAction
): SuggestedMovieState => {
  switch (type) {
    case "setGenres":
      return {
        ...state,
        genres: payload,
        selectedGenre: payload[0],
        loadingGenre: false,
        loadingMovies: true,
      };

    case "setSelectedGenre":
      return { ...state, selectedGenre: payload };

    case "showLoadingMovies":
      return { ...state, loadingMovies: true };

    case "setMovies":
      return { ...state, movies: payload, loadingMovies: false };

    default:
      return state;
  }
};
