import { Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import { useTailwind } from "tailwind-rn/dist";

const Home = () => {
  const Stack = createBottomTabNavigator();
  const tailwind = useTailwind();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tailwind("rounded-t-3xl bg-red h-[65]"),
      }}>
      {routes.map((route) => (
        <Stack.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={
                  focused ? tailwind("w-full bg-gray-400") : tailwind("bg-red")
                }>
                <AntDesign name="home" size={25} />
                {focused && <Text>home</Text>}
              </View>
            ),
          }}
          key={route.name}
          {...route}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Home;
