import { Container, IText } from "@components/general";
import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { StareIcon } from "@components/icons";
import { useTailwind } from "tailwind-rn/dist";

interface Props {
  value: number;
}

const RatingBar = ({ value }: Props) => {
  const tailwind = useTailwind();
  return (
    <Container style={tailwind("flex-row")}>
      {[0, 1, 2, 3, 4].map((item, index) =>
        index < value ? (
          <StareIcon isSelected color="yellow" />
        ) : (
          <StareIcon isSelected={false} color="yellow" />
        )
      )}
    </Container>
  );
};

export default RatingBar;

const styles = StyleSheet.create({});
