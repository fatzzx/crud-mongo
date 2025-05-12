import express from "express";
import animeController from "../controller/anime.controller.js";
import auth from "../middleware/jwt.token.middleware.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.post("/", auth, isAdmin, animeController.create);
router.post("/addToList", auth, animeController.addAnimeToUserList);
router.get("/", auth, animeController.getAll);
router.get("/mylist", auth, animeController.getUserAnimeList);
router.get("/:id", auth, animeController.getById);
router.put("/updateInList", auth, animeController.updateAnimeInUserList);
router.put("/:id", auth, isAdmin, animeController.updatePUT);
router.patch("/:id", auth, isAdmin, animeController.updatePATCH);
router.delete("/:id", auth, isAdmin, animeController.remove);

export default router;
