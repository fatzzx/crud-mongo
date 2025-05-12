import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },

    animeList: [
      {
        anime: { type: mongoose.Schema.Types.ObjectId, ref: "Anime" },
        status: {
          type: String,
          enum: ["watching", "completed", "plan to watch"],
          default: "plan to watch",
        },
        score: { type: Number, min: 1, max: 10 },
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
