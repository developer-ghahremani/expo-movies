import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

type Props = { size?: number; color?: string };

const IBack = (props: Props) => {
  return <Ionicons name="arrow-back" {...props} />;
};

export default IBack;

const styles = StyleSheet.create({});
