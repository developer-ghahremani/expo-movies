import "./src/i18";

import * as Font from "expo-font";

import React, { useEffect, useState } from "react";

import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Pages from "@pages/index";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwind-rn";
import store from "src/store";
import utilities from "./tailwind.json";

const App = () => {
  const [isFontloaded, setIsFontloaded] = useState<boolean>(false);
  LogBox.ignoreAllLogs(true);

  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      "nunito-medium": require("./assets/fonts/nunito/Nunito-Medium.ttf"),
      "nunito-regular": require("./assets/fonts/nunito/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/nunito/Nunito-Bold.ttf"),
      "nunito-extra-bold": require("./assets/fonts/nunito/Nunito-ExtraBold.ttf"),
    });
    setIsFontloaded(true);
  };

  if (!isFontloaded) return null;
  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Pages />
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;
