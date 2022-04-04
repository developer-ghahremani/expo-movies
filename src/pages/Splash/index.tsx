import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MainLayout } from "../../components/layout";
import { pageNames } from "@constants";
import { useNavigation } from "@react-navigation/native";
import { useTailwind } from "tailwind-rn/dist";

type Props = {};

const SplashScreen = (props: Props) => {
  const tailwind = useTailwind();
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate(pageNames.home.index);
    }, 50);
  }, []);

  return (
    <MainLayout>
      <Text style={tailwind("text-red")}>SplashScreen</Text>
    </MainLayout>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
