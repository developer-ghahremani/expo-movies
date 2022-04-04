import { Container, IFlatList, IText } from "@components/general";
import React, { useEffect, useReducer } from "react";
import { suggestedMovieInitialState, suggestedMovieReducer } from "./context";

import { Genre } from "@models";
import { GenreItem } from "@components/items";
import { getGenres } from "src/api/movie";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

const SuggestedMovie = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();

  const [state, dispatch] = useReducer(
    suggestedMovieReducer,
    suggestedMovieInitialState
  );

  useEffect(() => {
    loadGenres();
  }, []);

  const loadGenres = async () => {
    try {
      const { data } = await getGenres();
      dispatch({ type: "setGenres", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenrePress = (payload: Genre) => {
    dispatch({ type: "setSelectedGenre", payload });
  };

  return (
    <Container>
      <IText style={tailwind("text-lg font-nunito-bold")}>
        {t("general.suggestedForYou")}
      </IText>
      <IFlatList
        horizontal
        data={state.genres}
        style={tailwind("my-4")}
        renderItem={({ item }: { item: Genre }) => (
          <GenreItem
            genre={item}
            onPress={handleGenrePress}
            isSelected={item.uuid === state.selectedGenre?.uuid}
          />
        )}
      />
    </Container>
  );
};

export default SuggestedMovie;
