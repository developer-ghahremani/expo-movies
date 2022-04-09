import { Container, IImage, IText } from "@components/general";

import { MainLayout } from "@components/layout";
import React from "react";
import { StyleSheet } from "react-native";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

const Profile = () => {
  const tailwind = useTailwind();
  const { t } = useI18Next();
  const techAndLibs = [
    "Typescript",
    "React",
    "React native",
    "React native navigation",
    "Redux",
    "Redux toolkit",
    "RTK query (for fetch data)",
    "tailwind-rn (for use tailwind css in react native)",
    "millify",
    "i18next",
  ];

  return (
    <MainLayout>
      <Container
        style={tailwind("flex-col justify-center flex-1 items-center")}>
        <IImage
          source={require("@assets/images/me.jpg")}
          style={tailwind("w-40 h-40 rounded-full self-center")}
        />
        <IText style={tailwind("font-nunito-bold text-md text-center")}>
          Designed and implemented with React Native framework by Reza
          Ghahremani
        </IText>
        <IText style={tailwind("font-nunito-bold text-md text-center my-2")}>
          {t("general.myEmail")}
        </IText>
        <IText style={tailwind("text-xl font-nunito-bold mt-2")}>
          {t("general.techAndLibs")}
        </IText>
        <Container style={tailwind("flex-row flex-wrap items-center")}>
          {techAndLibs.map((item) => (
            <IText key={item} style={tailwind("mx-1 text-md")}>
              {`#${item},`}
            </IText>
          ))}
        </Container>
      </Container>
    </MainLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({});
