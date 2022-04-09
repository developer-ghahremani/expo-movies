import { Genre } from "@models";

export default interface Movie {
  _id: string;
  image: string;
  title: string;
  rating: string;
  year: string;
  titleOriginal: string;
  uuid: string;
  description: string;
  genres: Genre[];
  actors: [];
  directors: [];
  escritors: [];
  otherTitles: [];
  countries: { name: string; uuid: string }[];
  release: string;
  embedUrls: { server: string; url: string; priority: number }[];
  index: number;
  episodes: [];
  createdAt: Date;
  updatedAt: Date;
}

export interface MovieTrailer {
  type: string;
  videoId: string;
  url: string;
  title: string;
  description: string;
  image: string;
  thumbnail: string;
  seconds: number;
  timestamp: string;
  duration: {
    seconds: number;
    timestamp: string;
  };
  ago: string;
  views: number;
  author: {
    name: string;
    url: string;
  };
  embed: string;
}

export interface MovieYear {
  name: string;
  uuid: string;
}
