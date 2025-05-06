import express from "express";
import animeController from "../controller/anime.controller.js";

const router = express.Router();

router.post("/create", animeController.create);
router.get("/getAll", animeController.getAll);
router.get("/getById/:id", animeController.getById);
router.put("/update/:id", animeController.updatePUT);
router.patch("/update/:id", animeController.updatePATCH);
router.delete("/delete/:id", animeController.delete);

export default router;
