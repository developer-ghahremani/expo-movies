import {
  Container,
  IFlatList,
  ILoading,
  IText,
  ITouchable,
} from "@components/general";
import { Genre, Movie, MovieYear } from "@models";
import React, { useReducer } from "react";
import { colors, pageNames } from "@constants";
import { moviesInitialState, moviesReducer } from "./context";

import IBack from "@components/icons/IBack";
import { MainLayout } from "@components/layout";
import { MovieItem } from "@components/items";
import { MovieOptionsModal } from "@components/modals";
import { OptionIcon } from "@components/icons";
import { useGetMoviesQuery } from "src/store/service";
import { useI18Next } from "src/i18";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

const Movies = () => {
  const { goBack, navigate } = useNavigation();
  const tailwind = useTailwind();
  const [state, dispatch] = useReducer(moviesReducer, moviesInitialState);
  const { t } = useI18Next();
  const { data, isFetching } = useGetMoviesQuery({
    genres: state.genres?.uuid,
    year: state.year?.uuid,
    type: state.type,
  });

  const handleMoviePress = (movie: Movie) => {
    navigate(pageNames.movieDetails, { movieId: movie._id });
  };

  const handleToggleOptionModal = () => {
    dispatch({ type: "toggleOptionModal" });
  };

  const handleGenrePress = (genre: Genre) => {
    dispatch({ type: "setGenres", payload: genre });
  };

  const handleyearPress = (year: MovieYear) => {
    dispatch({ type: "setYears", payload: year });
  };

  return (
    <MainLayout>
      <Container style={tailwind("px-4 pt-4")}>
        <Container style={tailwind("flex-row justify-between items-center")}>
          <ITouchable onPress={goBack}>
            <IBack color="white" size={24} />
          </ITouchable>
          <IText>{t("general.movies")}</IText>
          <ITouchable onPress={handleToggleOptionModal}>
            <OptionIcon color="white" size={28} />
          </ITouchable>
        </Container>
        {isFetching ? (
          <ILoading color={colors.red} size={25} />
        ) : (
          <IFlatList
            data={data?.results}
            renderItem={({ item }: { item: Movie }) => (
              <MovieItem movie={item} onPress={handleMoviePress} />
            )}
          />
        )}
      </Container>
      <MovieOptionsModal
        visible={state.optionModal}
        onClose={handleToggleOptionModal}
        onGenrePress={handleGenrePress}
        selectedGenre={state.genres}
        onYearPress={handleyearPress}
        selectedYear={state.year}
      />
    </MainLayout>
  );
};

export default Movies;
