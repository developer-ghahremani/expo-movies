import { StyleSheet, Text, TextProps, View } from "react-native";

import React from "react";
import { useTailwind } from "tailwind-rn/dist";

interface Props extends TextProps {
  bold?: boolean;
}

const IText = ({ children, bold, style, ...prp }: Props) => {
  const tailwind = useTailwind();
  return (
    <Text
      style={[
        tailwind("text-white text-base"),
        tailwind(bold ? "font-nunito-bold" : "font-nunito-medium"),
        style,
      ]}
      {...prp}>
      {children}
    </Text>
  );
};

export default IText;

const styles = StyleSheet.create({});
