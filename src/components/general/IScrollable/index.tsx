import { ScrollView, ScrollViewProps } from "react-native";

import React from "react";

interface Props extends ScrollViewProps {}

const IScrollable = ({ children, ...props }: Props) => (
  <ScrollView {...props}>{children}</ScrollView>
);

export default IScrollable;
