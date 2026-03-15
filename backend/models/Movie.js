import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: { type: String, requied: true },
    title: { type: String, requied: true },
    overview: { type: String, requied: true },
    poster_path: { type: String, requied: true },
    backdrop_path: { type: String, requied: true },
    release_date: { type: String, requied: true },
    original_language: { type: String },
    tagline: { type: String },
    genres: { type: Array, requied: true },
    casts: { type: Array, requied: true },
    vote_average: { type: Number, requied: true },
    runtime: { type: Number, requied: true },
  },
  { timestamps: true },
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
