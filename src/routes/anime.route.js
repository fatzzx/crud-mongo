import express from "express";
import animeController from "../controller/anime.controller.js";
import auth from "../middleware/jwt.token.middleware.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

/**
 * @swagger
 * /anime:
 *   post:
 *     summary: Create a new anime
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - genre
 *             properties:
 *               title:
 *                 type: string
 *                 example: "86"
 *               synopsis:
 *                 type: string
 *                 example: "The story follows Lena and the 86 — a group forced to fight in a war as expendable soldiers."
 *               genre:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Action", "Drama", "Science Fiction"]
 *               episodes:
 *                 type: integer
 *                 example: 23
 *               imageUrl:
 *                 type: string
 *                 example: "testurl.jpg"
 *     responses:
 *       201:
 *         description: Anime successfully created
 *       403:
 *         description: Only admins can create animes
 */
router.post("/", auth, isAdmin, animeController.create);

/**
 * @swagger
 * /anime/addToList:
 *   post:
 *     summary: Add an anime to the user's list
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - animeId
 *             properties:
 *               animeId:
 *                 type: string
 *                 example: "6612e16897fbe3b1a857a7c3"
 *               status:
 *                 type: string
 *                 example: "watching"
 *               score:
 *                 type: number
 *                 example: 8
 *     responses:
 *       200:
 *         description: Anime successfully added to the list
 *       400:
 *         description: Anime is already in the list
 */
router.post("/addToList", auth, animeController.addAnimeToUserList);

/**
 * @swagger
 * /anime:
 *   get:
 *     summary: Get all animes
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all animes
 */
router.get("/", auth, animeController.getAll);

/**
 * @swagger
 * /anime/mylist:
 *   get:
 *     summary: Get the user's anime list
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's anime list
 */
router.get("/mylist", auth, animeController.getUserAnimeList);

/**
 * @swagger
 * /anime/{id}:
 *   get:
 *     summary: Get a specific anime by ID
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime found
 *       404:
 *         description: Anime not found
 */
router.get("/:id", auth, animeController.getById);

/**
 * @swagger
 * /anime/updateInList:
 *   put:
 *     summary: Update an anime in the user's list
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - animeId
 *             properties:
 *               animeId:
 *                 type: string
 *                 example: "6612e16897fbe3b1a857a7c3"
 *               status:
 *                 type: string
 *                 example: "completed"
 *               score:
 *                 type: number
 *                 example: 9.5
 *     responses:
 *       200:
 *         description: Anime successfully updated in the list
 *       400:
 *         description: Anime not found in the list
 */
router.put("/updateInList", auth, animeController.updateAnimeInUserList);

/**
 * @swagger
 * /anime/{id}:
 *   put:
 *     summary: Fully update an anime (PUT)
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - synopsis
 *               - genre
 *             properties:
 *               title:
 *                 type: string
 *                 example: "86"
 *               synopsis:
 *                 type: string
 *                 example: "Updated - New synopsis"
 *               genre:
 *                 type: string
 *                 example: "Drama"
 *               imageUrl:
 *                 type: string
 *                 example: "testurl.jpg"
 *     responses:
 *       200:
 *         description: Anime successfully updated
 *       404:
 *         description: Anime not found
 */
router.put("/:id", auth, isAdmin, animeController.updatePUT);

/**
 * @swagger
 * /anime/{id}:
 *   patch:
 *     summary: Partially update an anime (PATCH)
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "86 (Eighty Six)"
 *               synopsis:
 *                 type: string
 *                 example: "Partially updated synopsis"
 *               genre:
 *                 type: string
 *                 example: "Action"
 *               imageUrl:
 *                 type: string
 *                 example: "testurl.jpg"
 *     responses:
 *       200:
 *         description: Anime successfully updated
 *       404:
 *         description: Anime not found
 */
router.patch("/:id", auth, isAdmin, animeController.updatePATCH);

/**
 * @swagger
 * /anime/{id}:
 *   delete:
 *     summary: Delete an anime
 *     tags: [Animes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Anime successfully deleted
 *       404:
 *         description: Anime not found
 */
router.delete("/:id", auth, isAdmin, animeController.remove);

export default router;
