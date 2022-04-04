import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import React from "react";

interface Props extends TouchableOpacityProps {}

const ITouchable = ({ children, ...prp }: Props) => (
  <TouchableOpacity {...prp}>{children}</TouchableOpacity>
);

export default ITouchable;
