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
