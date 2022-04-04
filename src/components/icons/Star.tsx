import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

type Props = {
  color?: string;
  size?: number;
  isSelected: boolean;
};

const Star = (props: Props) => {
  if (props.isSelected) return <AntDesign name="star" {...props} />;
  return <AntDesign name="staro" {...props} />;
};

export default Star;
