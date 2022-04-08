import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Movie } from "@models";

const initialState: Movie[] = [];

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (movies, action: PayloadAction<Movie>) => {
      const index = movies.findIndex((item) => item._id === action.payload._id);
      if (index < 0) movies.push(action.payload);
      else movies.splice(index, 1);
    },
  },
});

export default favorites;

export const { toggleFavorite } = favorites.actions;
