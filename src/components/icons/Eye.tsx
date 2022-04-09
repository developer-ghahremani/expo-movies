import { StyleProp, ViewStyle } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

type Props = { color?: string; size?: number; style?: StyleProp<ViewStyle> };

const EyeIcon = (props: Props) => {
  return <Ionicons name="eye" {...props} />;
};

export default EyeIcon;
