import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

type Props = { size?: number; color?: string };

const OptionIcon = (props: Props) => (
  <Ionicons name="options-outline" {...props} />
);

export default OptionIcon;
