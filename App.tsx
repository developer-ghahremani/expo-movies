import "./src/i18";

import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Pages from "@pages/index";
import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Pages />
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
