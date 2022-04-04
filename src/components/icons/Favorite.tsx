import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const Favorite = (props: Props) => {
  return <AntDesign name="hearto" {...props} />;
};

export default Favorite;
