import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "../database/configdb.js";
import User from "../models/User.js";
import Anime from "../models/Anime.js";
import userRoute from "../routes/user.route.js";
import userProtected from "../routes/protected.route.js";
import animeRoute from "../routes/anime.route.js";
import swaggerUi from "swagger-ui-express";
import { specs } from "../config/swagger.js";

dotenv.config();

db.connect();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    url: "/docs/swagger.json",
    customCssUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.css",
    customJs: [
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-bundle.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-standalone-preset.js",
      "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui-init.js",
    ],
  }),
);
app.use("/user", userRoute);
app.use("/anime", animeRoute);
app.use("/auth", userProtected);

app.get("/", (req, res) => res.send("Express on Vercel"));

export default app;
