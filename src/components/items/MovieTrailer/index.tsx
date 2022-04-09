import { Container, IImage, IText, ITouchable } from "@components/general";
import { StyleSheet, Text, View } from "react-native";

import { MovieTrailer } from "@models";
import { PlayIcon } from "@components/icons";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  trailer: MovieTrailer;
  onPress: (trailer: MovieTrailer) => void;
};

const MovieTrailerItem = ({ trailer, onPress }: Props) => {
  const tailwind = useTailwind();

  const handlePress = () => {
    onPress(trailer);
  };

  return (
    <ITouchable onPress={handlePress} style={tailwind("my-3 mx-1")}>
      <Container style={tailwind("w-40 h-40 rounded-lg relative")}>
        <IImage
          source={{ uri: trailer.image }}
          style={tailwind("w-40 h-40 rounded-lg")}
          resizeMode="contain"
        />
        <Container
          style={tailwind(
            "absolute left-[40%] top-[40%] bg-white bg-opacity-50 rounded-full justify-center items-center"
          )}>
          <PlayIcon size={29} color="black" />
        </Container>
      </Container>
    </ITouchable>
  );
};

export default MovieTrailerItem;

const styles = StyleSheet.create({});
