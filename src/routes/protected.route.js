import express from "express";
import verifyToken from "../middleware/jwt.token.middleware.js";
import ProtectedController from "../controller/protected.controller.js";

const router = express.Router();

router.get("/protected", verifyToken, ProtectedController.accessProtected);

export default router;
