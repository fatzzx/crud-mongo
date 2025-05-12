import mongoose from "mongoose";

const animeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    synopsis: String,
    episodes: Number,
    genre: [String],
    imageUrl: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export default mongoose.model("Anime", animeSchema);
