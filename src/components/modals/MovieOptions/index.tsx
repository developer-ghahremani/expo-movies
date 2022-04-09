import { Container, ILoading, IModal, IText } from "@components/general";
import { Genre, MovieYear } from "@models";
import {
  useGetMovieGenresQuery,
  useGetMovieYearQuery,
} from "src/store/service";

import { GenreItem } from "@components/items";
import { IModalProps } from "@components/general/IModal";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends IModalProps {
  onGenrePress?: (genre: Genre) => void;
  selectedGenre?: Genre;
  onYearPress?: (year: MovieYear) => void;
  selectedYear?: MovieYear;
}

const MovieOption = (props: Props) => {
  const { data: genres, isLoading: isGenresLoading } = useGetMovieGenresQuery();
  const { data: years, isLoading: isYearsLoading } = useGetMovieYearQuery();
  const tailwind = useTailwind();
  const { t } = useI18Next();

  const handleGenrePress = (genre: Genre) => {
    props.onGenrePress && props.onGenrePress(genre);
  };

  const handleYearPress = (year: MovieYear) => {
    props.onYearPress && props.onYearPress(year);
  };

  return (
    <IModal {...props}>
      <Container style={tailwind("rounded-lg bg-dark p-4 ")}>
        <IText style={tailwind("font-nunito-bold text-lg")}>
          {t("general.years")}
        </IText>
        {isYearsLoading ? (
          <ILoading color={colors.red} size={30} />
        ) : (
          <Container style={tailwind("flex-row flex-wrap")}>
            {years?.results.slice(0, 10).map((year) => (
              <GenreItem
                genre={year}
                key={year.uuid}
                isSelected={props.selectedYear?.uuid === year.uuid}
                onPress={handleYearPress}
              />
            ))}
          </Container>
        )}
        <IText style={tailwind("font-nunito-bold text-lg")}>
          {t("general.genres")}
        </IText>
        {isGenresLoading ? (
          <ILoading color={colors.red} size={30} />
        ) : (
          <Container style={tailwind("flex-row flex-wrap")}>
            {genres?.results.map((genre) => (
              <GenreItem
                genre={genre}
                key={genre.uuid}
                isSelected={props.selectedGenre?.uuid === genre.uuid}
                onPress={handleGenrePress}
              />
            ))}
          </Container>
        )}
      </Container>
    </IModal>
  );
};

export default MovieOption;
