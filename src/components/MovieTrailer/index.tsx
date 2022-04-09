import { Container, IFlatList, ILoading, IText } from "@components/general";
import React, { useState } from "react";

import { MovieTrailerItem } from "@components/items";
import { MovieTrailer as MovieTrailerModel } from "@models";
import { TrailerDetail } from "@components/modals";
import { useGetMovieTrailersQuery } from "src/store/service";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

type Props = { movieId: string };

const MovieTrailer = ({ movieId }: Props) => {
  const { data, isFetching } = useGetMovieTrailersQuery({ movieId });
  const [state, setState] = useState<{
    detailModal: boolean;
    trailerSelected?: MovieTrailerModel;
  }>({
    detailModal: false,
  });
  const tailwind = useTailwind();
  const { t } = useI18Next();

  const handleTrailerModal = (trailer: MovieTrailerModel) => {
    setState((s) => ({ ...s, detailModal: true, trailerSelected: trailer }));
  };

  const handleCloseTrailerDetaileModal = () => {
    setState((s) => ({ ...s, detailModal: false }));
  };

  if (isFetching)
    return (
      <Container style={tailwind("justify-center items-center")}>
        <ILoading />
      </Container>
    );

  return (
    <>
      <Container style={tailwind("mb-12")}>
        <IText style={tailwind("font-nunito-bold text-lg my-2")}>
          {t("general.movieTrailers")}
        </IText>
        <IFlatList
          data={data?.result}
          horizontal
          renderItem={({ item }: { item: MovieTrailerModel }) => (
            <MovieTrailerItem onPress={handleTrailerModal} trailer={item} />
          )}
        />
      </Container>
      {state.trailerSelected && (
        <TrailerDetail
          onClose={handleCloseTrailerDetaileModal}
          visible={state.detailModal}
          trailer={state.trailerSelected}
        />
      )}
    </>
  );
};

export default MovieTrailer;
