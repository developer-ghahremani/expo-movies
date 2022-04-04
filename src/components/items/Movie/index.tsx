import { Container, IImage, IText } from "@components/general";
import { Text, View } from "react-native";

import { Movie } from "@models";
import RatingBar from "@components/RatingBar";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props {
  movie: Movie;
}

const MovieItem = ({ movie }: Props) => {
  const tailwind = useTailwind();
  return (
    <Container style={tailwind("my-2")}>
      <Container style={tailwind("flex-row")}>
        <IImage
          source={{ uri: movie.image }}
          style={tailwind("w-24 h-28 rounded-lg")}
        />

        <Container style={tailwind("flex-1 px-4 justify-center")}>
          <Container style={tailwind("flex-row items-center")}>
            <IText style={tailwind("font-nunito-bold")}>{movie.title}</IText>
            <IText
              style={tailwind(
                "text-gray-500 mx-1 text-sm"
              )}>{`(${movie.year})`}</IText>
          </Container>

          {/* <IText style={tailwind("text-gray-500 text-sm")}>
            {movie.rating}
          </IText> */}
          <RatingBar value={parseInt(movie.rating.split("/")[0]) / 2 || 0} />
          <IText style={tailwind("text-gray-500 text-sm")}>
            {movie.genres.map((item) => item.name).join(", ")}
          </IText>
        </Container>
      </Container>
    </Container>
  );
};

export default MovieItem;
