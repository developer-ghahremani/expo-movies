import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { useTailwind } from "tailwind-rn/dist";

type Props = {};

const Landing = (props: Props) => {
  const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind("rounded-t-lg bg-red")}>Landing</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({});
