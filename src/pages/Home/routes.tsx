import { FavoriteIcon, HomeIcon } from "@components/icons";

import Favorite from "./Favorites";
import Landing from "./Landing";
import Profile from "./Profile";
import ProfileIcon from "@components/icons/Profile";
import React from "react";
import { pageNames } from "@constants";

const routes: {
  name: string;
  component: React.FC;
  icon: JSX.Element;
  label: string;
}[] = [
  {
    name: pageNames.home.landing,
    component: Landing,
    icon: <HomeIcon color="white" size={25} />,
    label: "home",
  },
  {
    name: pageNames.home.favorite,
    component: Favorite,
    icon: <FavoriteIcon color="white" size={25} />,
    label: "favorite",
  },
  {
    name: pageNames.home.profile,
    component: Profile,
    icon: <ProfileIcon color="white" size={25} />,
    label: "profile",
  },
];

export default routes;
