import { View, ViewProps } from "react-native";

import React from "react";

interface Props extends ViewProps {}

const Container = ({ children, ...prp }: Props) => {
  return <View {...prp}>{children}</View>;
};

export default Container;
