import Home from "./Home";
import Splash from "@pages/Splash";
import { pageNames } from "@constants";

const routes = [
  { name: pageNames.splash, component: Splash },
  { name: pageNames.home.index, component: Home },
];

export default routes;
