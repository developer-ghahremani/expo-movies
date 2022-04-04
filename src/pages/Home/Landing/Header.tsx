import { Container, IImage, IText } from "@components/general";
import { StyleSheet, Text, View } from "react-native";

import { Movie } from "@models";
import RatingBar from "@components/RatingBar";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = { movie?: Movie };

const Header = ({ movie }: Props) => {
  const tailwind = useTailwind();
  if (!movie?._id) return null;
  return (
    <Container>
      <Container style={tailwind("flex-row")}>
        <IImage source={{ uri: movie?.image }} style={tailwind("w-40 h-64")} />
        <Container style={tailwind("flex-1 px-2 justify-center")}>
          <Container style={tailwind("flex-row items-center")}>
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
          <IText style={tailwind("text-gray-500 mx-1")}>{movie.release}</IText>
        </Container>
      </Container>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({});
