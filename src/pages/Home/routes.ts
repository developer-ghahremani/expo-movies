import Favorite from "./Favorites";
import Landing from "./Landing";
import Profile from "./Profile";
import { pageNames } from "@constants";

const routes = [
  { name: pageNames.home.landing, component: Landing },
  { name: pageNames.home.favorite, component: Favorite },
  { name: pageNames.home.profile, component: Profile },
];

export default routes;
