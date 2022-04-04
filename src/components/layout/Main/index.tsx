import { StatusBar, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTailwind } from "tailwind-rn/dist";

type Props = { children: React.ReactNode };

const MainLayout = ({ children }: Props) => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind("flex-1")}>
      <StatusBar barStyle="light-content" />
      <View style={tailwind("flex-1 bg-dark")}>{children}</View>
    </SafeAreaView>
  );
};

export default MainLayout;
