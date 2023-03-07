import { ObjectId } from "mongodb";

interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export default interface Favorite {
  userID: ObjectId;
  _id?: ObjectId;
  movie: Movie;
}
