import { StyleProp, ViewStyle } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

type Props = { size?: number; color?: string; style?: StyleProp<ViewStyle> };

const PlayIcon = (props: Props) => <Entypo name="controller-play" {...props} />;

export default PlayIcon;
