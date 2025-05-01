import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "../database/configdb.js";
import User from "../models/User.js";

dotenv.config();

db.connect();

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Express on Vercel"));

export default app;
