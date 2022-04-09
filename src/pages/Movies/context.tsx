import { Genre, MovieYear } from "@models";

interface MoviesStateActions {
  type: "setGenres" | "setYears" | "toggleOptionModal";
  payload?: any;
}

interface MoviesStateInterface {
  year?: MovieYear;
  genres?: Genre;
  type?: string;
  optionModal?: boolean;
}

export const moviesInitialState: MoviesStateInterface = {};

export const moviesReducer = (
  state = moviesInitialState,
  { type, payload }: MoviesStateActions
): MoviesStateInterface => {
  switch (type) {
    case "toggleOptionModal":
      return { ...state, optionModal: !state.optionModal };

    case "setGenres":
      return {
        ...state,
        genres: state.genres?.uuid === payload.uuid ? null : payload,
      };

    case "setYears":
      return {
        ...state,
        year: state.year?.uuid === payload.uuid ? null : payload,
      };

    default:
      return state;
  }
};
