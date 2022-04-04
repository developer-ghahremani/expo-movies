import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

import React from "react";

interface Props extends ActivityIndicatorProps {}

const ILoading = (props: Props) => {
  return <ActivityIndicator {...props} />;
};

export default ILoading;
