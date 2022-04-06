import Home from "./Home";
import MovieDetails from "./MovieDetail";
import Movies from "./Movies";
import Splash from "@pages/Splash";
import { pageNames } from "@constants";

const routes = [
  { name: pageNames.splash, component: Splash },
  { name: pageNames.home.index, component: Home },
  { name: pageNames.movies, component: Movies },
  { name: pageNames.movieDetails, component: MovieDetails },
];

export default routes;
