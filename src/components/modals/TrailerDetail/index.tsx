import {
  Container,
  IImage,
  IModal,
  IText,
  ITouchable,
} from "@components/general";
import { EyeIcon, PlayIcon } from "@components/icons";

import { IModalProps } from "@components/general/IModal";
import { LinearGradient } from "expo-linear-gradient";
import { Linking } from "react-native";
import { MovieTrailer } from "@models";
import React from "react";
import { colors } from "@constants";
import { millify } from "millify";
import { useI18Next } from "src/i18";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends IModalProps {
  trailer: MovieTrailer;
}

const TrailerDetail = ({ trailer, ...props }: Props) => {
  const tailwind = useTailwind();
  const { t } = useI18Next();

  const showTrailer = async () => {
    try {
      await Linking.openURL(trailer.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IModal {...props}>
      <Container style={tailwind("p-5 rounded-lg bg-grayDark")}>
        {/* ------------------- IMAGE CONTAINER ------------------  */}
        <ITouchable
          onPress={showTrailer}
          style={tailwind("h-72 rounded-lg w-full relative")}>
          <IImage
            source={{ uri: trailer.image }}
            style={tailwind("h-72 rounded-lg w-full")}
            resizeMode="cover"
          />
          <LinearGradient
            colors={["#ffffff10", colors.grayDark]}
            style={tailwind("h-72 rounded-lg w-full absolute")}
          />
          <Container
            style={tailwind("w-full h-full flex-col justify-between absolute")}>
            <Container style={tailwind("w-full flex-row justify-end")}>
              <Container style={tailwind("flex-row items-center")}>
                <IText style={tailwind("mx-2 text-sm font-nunito-bold")}>
                  {millify(trailer.views)}
                </IText>
                <EyeIcon size={25} color={"white"} />
              </Container>
            </Container>
            <Container
              style={tailwind(
                "self-center w-16 h-16 bg-white bg-opacity-30 justify-center items-center rounded-full"
              )}>
              <PlayIcon size={35} />
            </Container>
            <Container style={tailwind("w-full flex-row justify-between")}>
              <IText>{trailer.ago}</IText>
              <IText>
                {t("general.duration", { duration: trailer.timestamp })}
              </IText>
            </Container>
          </Container>
        </ITouchable>
        {/* ------------------- IMAGE CONTAINER ------------------  */}
        <IText style={tailwind("font-nunito-bold mt-5")}>{trailer.title}</IText>
        <IText style={tailwind("text-gray-500 ")}>{trailer.description}</IText>
      </Container>
    </IModal>
  );
};

export default TrailerDetail;
