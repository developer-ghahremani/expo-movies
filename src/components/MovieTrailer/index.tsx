import { Container, IFlatList, ILoading, IText } from "@components/general";

import { MovieTrailerItem } from "@components/items";
import { MovieTrailer as MovieTrailerModel } from "@models";
import React from "react";
import { useGetMovieTrailersQuery } from "src/store/service";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

type Props = { movieId: string };

const MovieTrailer = ({ movieId }: Props) => {
  const { data, isFetching, isError } = useGetMovieTrailersQuery({ movieId });
  const tailwind = useTailwind();
  const { t } = useI18Next();
  if (isFetching)
    return (
      <Container style={tailwind("justify-center items-center")}>
        <ILoading />
      </Container>
    );
  return (
    <Container style={tailwind("mb-12")}>
      <IText style={tailwind("font-nunito-bold text-lg my-2")}>
        {t("general.movieTrailers")}
      </IText>
      <IFlatList
        data={data?.result}
        horizontal
        renderItem={({ item }: { item: MovieTrailerModel }) => (
          <MovieTrailerItem trailer={item} />
        )}
      />
    </Container>
  );
};

export default MovieTrailer;
