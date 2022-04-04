import { Genre } from "@models";

interface SuggestedMovieAction {
  type: "setGenres" | "setSelectedGenre";
  payload: any;
}

interface SuggestedMovieState {
  genres: Genre[];
  selectedGenre?: Genre;
}

export const suggestedMovieInitialState: SuggestedMovieState = {
  genres: [],
};

export const suggestedMovieReducer = (
  state = suggestedMovieInitialState,
  { payload, type }: SuggestedMovieAction
): SuggestedMovieState => {
  switch (type) {
    case "setGenres":
      return { ...state, genres: payload, selectedGenre: payload[0] };

    case "setSelectedGenre":
      return { ...state, selectedGenre: payload };

    default:
      return state;
  }
};
