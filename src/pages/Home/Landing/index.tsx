import { Container, IText } from "@components/general";

import { ISearch } from "@components/icons";
import { MainLayout } from "@components/layout";
import React from "react";
import { SuggestedMovie } from "@components";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

const Landing = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  return (
    <MainLayout>
      <Container style={tailwind("px-4 pt-4")}>
        <Container style={tailwind("flex-row justify-between items-center")}>
          <IText style={tailwind("text-lg font-nunito-bold")}>
            {t("general.topPicksBy")}
          </IText>
          <ISearch color="white" size={20} />
        </Container>
        <SuggestedMovie />
      </Container>
    </MainLayout>
  );
};

export default Landing;
