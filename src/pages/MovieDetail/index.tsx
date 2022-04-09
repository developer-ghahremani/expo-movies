import {
  Container,
  IImage,
  ILoading,
  IScrollable,
  IText,
  ITouchable,
} from "@components/general";
import { Dimensions, StyleSheet } from "react-native";
import { MovieTrailer, RatingBar } from "@components";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store";
import { useNavigation, useRoute } from "@react-navigation/native";

import { FavoriteIcon } from "@components/icons";
import { GenreItem } from "@components/items";
import IBack from "@components/icons/IBack";
import { LinearGradient } from "expo-linear-gradient";
import { MainLayout } from "@components/layout";
import { colors } from "@constants";
import { toggleFavorite } from "src/store/favorites";
import { useGetMovieDetailQuery } from "src/store/service";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

const MovieDetails = () => {
  const [showMoreDesc, setShowMoreDesc] = useState<boolean>(false);
  const { params } = useRoute();
  const { movieId = "" } = params;
  const tailwind = useTailwind();
  const { goBack } = useNavigation();
  const { t } = useI18Next();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((s) => s.favorites);

  const { data, isFetching } = useGetMovieDetailQuery({
    id: movieId || "",
  });

  const toggleDescription = () => {
    setShowMoreDesc((s) => !s);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(data?.result));
  };

  if (isFetching)
    return (
      <MainLayout>
        <Container style={tailwind("flex-1 justify-center items-center")}>
          <ILoading color={colors.red} size={100} />
        </Container>
      </MainLayout>
    );

  return (
    <MainLayout>
      <IScrollable style={tailwind("px-4 pt-2")}>
        <Container style={tailwind("flex-row justify-between items-center")}>
          <ITouchable onPress={goBack}>
            <IBack color="white" size={24} />
          </ITouchable>
        </Container>

        <Container
          style={{
            ...styles.imageContianer,
            position: "relative",
            marginTop: 5,
          }}>
          <IImage
            source={{ uri: data?.result.image }}
            style={styles.imageContianer}
            resizeMode="cover"
          />

          <LinearGradient
            colors={["#00000010", colors.dark]}
            style={{
              ...styles.imageContianer,
              position: "absolute",
              bottom: 0,
            }}>
            <ITouchable
              onPress={handleToggleFavorite}
              style={{
                ...tailwind(
                  "bottom-5 right-5 absolute bg-grayDark justify-center items-center p-3"
                ),
                borderRadius: 50,
              }}>
              <FavoriteIcon
                color={
                  !!favorites.find((item) => item._id === data?.result._id)
                    ? "red"
                    : "white"
                }
                size={30}
              />
            </ITouchable>
          </LinearGradient>
        </Container>
        <IText style={tailwind("text-center text-2xl mt-2 font-nunito-bold")}>
          {data?.result.titleOriginal}
        </IText>
        <IText style={tailwind("text-gray-300 mt-2 text-center")}>
          {data?.result.release}
        </IText>

        <Container style={tailwind("flex-row justify-center mt-2")}>
          <RatingBar
            size={20}
            value={parseInt(data?.result.rating.split("/")[0] || "0") / 2}
          />
        </Container>

        <Container style={tailwind("flex-row justify-center mt-3")}>
          {data?.result.genres.slice(0, 3).map((item) => (
            <GenreItem genre={item} key={item.uuid} />
          ))}
        </Container>

        <Container style={tailwind("mt-2")}>
          <IText style={tailwind("font-nunito-bold text-lg")}>
            {t("general.description")}
          </IText>
          <IText style={tailwind("mt-1 text-gray-400")}>
            {showMoreDesc
              ? data?.result.description
              : `${data?.result.description.substring(0, 200)}...`}
          </IText>
          <ITouchable onPress={toggleDescription}>
            <IText style={tailwind("mt-1 text-center")}>
              {showMoreDesc
                ? t("general.show", { option: t("general.more") })
                : t("general.show", { option: t("general.less") })}
            </IText>
          </ITouchable>
        </Container>

        <MovieTrailer movieId={movieId || ""} />
      </IScrollable>
    </MainLayout>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  imageContianer: {
    width: "100%",
    height: Dimensions.get("window").height / 2,
    borderRadius: 10,
  },
});
