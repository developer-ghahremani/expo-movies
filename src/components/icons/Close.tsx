import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

type Props = { color?: string; size?: number };

const Close = (props: Props) => <AntDesign name="close" {...props} />;

export default Close;
