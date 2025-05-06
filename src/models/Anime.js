import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  episodes: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
