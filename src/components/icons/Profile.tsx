import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";

interface Props {
  size?: number;
  color?: string;
}

const ProfileIcon = (props: Props) => {
  return <AntDesign name="profile" {...props} />;
};

export default ProfileIcon;
