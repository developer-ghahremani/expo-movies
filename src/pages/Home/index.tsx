import { Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { IText } from "@components/general";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "./routes";
import { t } from "i18next";
import { useTailwind } from "tailwind-rn/dist";

const Home = () => {
  const Stack = createBottomTabNavigator();
  const tailwind = useTailwind();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tailwind("rounded-t-3xl bg-red h-[75] absolute"),
      }}>
      {routes.map((route) => (
        <Stack.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={[tailwind("justify-center items-center flex-row")]}>
                <View
                  style={tailwind(
                    `flex-row items-center p-2 rounded-lg ${
                      focused ? "bg-black bg-opacity-10" : ""
                    }`
                  )}>
                  {route.icon}
                  {/* <AntDesign name="home" color="white" size={25} /> */}
                  {focused && (
                    <IText style={tailwind("ml-2")}>
                      {t(`general.${route.label}`)}
                    </IText>
                  )}
                </View>
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
