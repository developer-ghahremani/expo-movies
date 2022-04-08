import { Container, IFlatList } from "@components/general";
import { StyleSheet, Text, View } from "react-native";

import { MainLayout } from "@components/layout";
import { Movie } from "@models";
import { MovieItem } from "@components/items";
import React from "react";
import { pageNames } from "@constants";
import { useAppSelector } from "src/store";
import { useNavigation } from "@react-navigation/native";

const Favorite = () => {
  const favorites = useAppSelector((s) => s.favorites);
  const { navigate } = useNavigation();
  const handleMovieDetail = (params: Movie) => {
    navigate(pageNames.movieDetails, { movieId: params._id });
  };

  return (
    <MainLayout>
      <Container>
        <IFlatList
          data={favorites}
          renderItem={({ item }) => (
            <MovieItem onPress={handleMovieDetail} movie={item} />
          )}
        />
      </Container>
    </MainLayout>
  );
};

export default Favorite;

const styles = StyleSheet.create({});
