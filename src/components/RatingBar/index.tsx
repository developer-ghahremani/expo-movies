import { Container } from "@components/general";
import React from "react";
import { StareIcon } from "@components/icons";
import { StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

interface Props {
  value: number;
  size?: number;
}

const RatingBar = ({ value, size }: Props) => {
  const tailwind = useTailwind();
  return (
    <Container style={tailwind("flex-row")}>
      {[0, 1, 2, 3, 4].map((item, index) =>
        index < value ? (
          <StareIcon key={index} isSelected color="yellow" size={size} />
        ) : (
          <StareIcon
            key={index}
            isSelected={false}
            color="yellow"
            size={size}
          />
        )
      )}
    </Container>
  );
};

export default RatingBar;

const styles = StyleSheet.create({});
