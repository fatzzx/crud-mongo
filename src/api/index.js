import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "../database/configdb.js";
import User from "../models/User.js";
import Anime from "../models/Anime.js";
import userRoute from "../routes/user.route.js";
import userProtected from "../routes/protected.route.js";
import animeRoute from "../routes/anime.route.js";

dotenv.config();

db.connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);
app.use("/anime", animeRoute);
app.use("/auth", userProtected);

app.get("/", (req, res) => res.send("Express on Vercel"));

export default app;
