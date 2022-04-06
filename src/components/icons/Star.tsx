import { StyleProp, ViewStyle } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";

type Props = {
  color?: string;
  size?: number;
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
};

const Star = (props: Props) => {
  if (props.isSelected) return <FontAwesome name="star" {...props} />;
  return <FontAwesome name="star-o" {...props} />;
};

export default Star;
