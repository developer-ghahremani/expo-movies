import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";

const Pages = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {routes.map((route) => (
        <Stack.Screen key={route.name} {...route} />
      ))}
    </Stack.Navigator>
  );
};

export default Pages;
