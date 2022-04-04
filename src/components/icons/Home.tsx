import { StyleSheet, Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const IHome = (props: Props) => {
  return <AntDesign name="home" {...props} />;
};

export default IHome;
