import {
  Container,
  IFlatList,
  ILoading,
  IText,
  ITouchable,
} from "@components/general";
import { Genre, Movie } from "@models";
import { GenreItem, MovieItem } from "@components/items";
import React, { useEffect, useReducer } from "react";
import { colors, pageNames } from "@constants";
import { getGenres, getMovies } from "src/api/movie";
import { suggestedMovieInitialState, suggestedMovieReducer } from "./context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

type Props = { onPressMovie: (movie: Movie) => void };

const SuggestedMovie = ({ onPressMovie }: Props) => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const { navigate } = useNavigation();

  const [state, dispatch] = useReducer(
    suggestedMovieReducer,
    suggestedMovieInitialState
  );

  useEffect(() => {
    if (state.selectedGenre?.uuid) loadMovies();
  }, [state.selectedGenre]);

  const loadMovies = async () => {
    dispatch({ type: "showLoadingMovies" });
    try {
      const { data } = await getMovies({ genres: state.selectedGenre?.uuid });
      dispatch({ type: "setMovies", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

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

  const hadnleMorePress = () => {
    navigate(pageNames.movies);
  };

  return (
    <Container style={tailwind("mt-4")}>
      <Container style={tailwind("flex-row justify-between items-center")}>
        <IText style={tailwind("text-lg font-nunito-bold")}>
          {t("general.suggestedForYou")}
        </IText>
        <ITouchable onPress={hadnleMorePress}>
          <IText style={tailwind("text-sm  ")}>{t("general.showMore")}</IText>
        </ITouchable>
      </Container>
      {state.loadingGenre && <ILoading color={colors.red} />}
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
      {state.loadingMovies ? (
        <ILoading color={colors.red} />
      ) : (
        <IFlatList
          data={state.movies}
          renderItem={({ item }) => (
            <MovieItem onPress={(movie) => onPressMovie(movie)} movie={item} />
          )}
        />
      )}
    </Container>
  );
};

export default SuggestedMovie;
