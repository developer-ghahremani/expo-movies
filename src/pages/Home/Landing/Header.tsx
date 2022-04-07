import { Container, IImage, IText, ITouchable } from "@components/general";

import { Movie } from "@models";
import RatingBar from "@components/RatingBar";
import React from "react";
import { pageNames } from "@constants";
import { useI18Next } from "src/i18";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

type Props = { movie?: Movie };

const Header = ({ movie }: Props) => {
  const { navigate } = useNavigation();
  const tailwind = useTailwind();
  const { t } = useI18Next();

  const handleMovieDetail = () => {
    navigate(pageNames.movieDetails, { movieId: movie?._id });
  };

  if (!movie?._id) return null;
  return (
    <Container>
      <Container style={tailwind("flex-row")}>
        <IImage source={{ uri: movie?.image }} style={tailwind("w-40 h-64")} />
        <Container style={tailwind("flex-1 px-2 justify-center")}>
          <Container style={tailwind("flex-row items-center flex-wrap")}>
            <IText style={tailwind("font-nunito-bold text-lg")}>
              {movie.title}
            </IText>
            <IText
              style={tailwind("text-gray-500 mx-1")}>{`(${movie.year})`}</IText>
          </Container>
          <Container style={tailwind("my-1")}>
            <RatingBar
              size={20}
              value={parseInt(movie.rating.split("/")[0]) / 2}
            />
          </Container>
          <IText style={tailwind("text-gray-500 mx-1")}>
            {movie.genres
              .slice(0, 3)
              .map((item) => item.name)
              .join(", ")}
          </IText>
          <IText style={tailwind("text-gray-500 mx-1")}>
            {movie.countries
              .slice(0, 3)
              .map((item) => item.name)
              .join(", ")}
          </IText>
          <Container style={tailwind("flex-row justify-between")}>
            <IText style={tailwind("text-gray-500")}>{movie.release}</IText>
            <ITouchable onPress={handleMovieDetail}>
              <IText
                style={tailwind(
                  "text-gray-500 mx-1 border-b-[.5px] border-white"
                )}>
                {t("general.viewDetails")}
              </IText>
            </ITouchable>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Header;
