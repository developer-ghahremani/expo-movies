import { Container, IText } from "@components/general";
import React, { useState } from "react";

import Header from "./Header";
import { ISearch } from "@components/icons";
import { MainLayout } from "@components/layout";
import { Movie } from "@models";
import { SuggestedMovie } from "@components";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

const Landing = () => {
  const [state, setState] = useState<{ movie: Movie }>({ movie: {} });
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const onPressMovie = (movie: Movie) => {
    setState((s) => ({ ...s, movie }));
  };

  return (
    <MainLayout>
      <Container style={tailwind("px-4 pt-4")}>
        <Header movie={state.movie} />
        {/* <Container style={tailwind("flex-row justify-between items-center")}>
          <IText style={tailwind("text-lg font-nunito-bold")}>
            {t("general.topPicksBy")}
          </IText>
          <ISearch color="white" size={20} />
        </Container> */}
        <SuggestedMovie onPressMovie={onPressMovie} />
      </Container>
    </MainLayout>
  );
};

export default Landing;
