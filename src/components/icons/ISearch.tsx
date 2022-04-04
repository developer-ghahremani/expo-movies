import { StyleSheet, Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const ISearch = (props: Props) => {
  return <AntDesign name="search1" {...props} />;
};

export default ISearch;
