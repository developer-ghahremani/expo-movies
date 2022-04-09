import { Container, IText, ITouchable } from "@components/general";
import { StyleSheet, Text, View } from "react-native";

import { Genre } from "@models";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {
  genre: Genre;
  isSelected?: boolean;
  onPress?: (genre: Genre) => void;
};

const GenreItem = ({ genre, isSelected, onPress }: Props) => {
  const tailwind = useTailwind();

  const handlePress = () => {
    onPress && onPress(genre);
  };

  return (
    <ITouchable disabled={!onPress} onPress={handlePress}>
      <Container
        style={[
          tailwind("m-2 rounded-lg items-center text-center py-2 px-4"),
          tailwind(isSelected ? "bg-red" : "bg-grayDark"),
        ]}>
        <IText numberOfLines={1}>{genre.name}</IText>
      </Container>
    </ITouchable>
  );
};

export default GenreItem;

const styles = StyleSheet.create({});
