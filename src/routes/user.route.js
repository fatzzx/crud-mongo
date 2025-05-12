import express from "express";
import userController from "../controller/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: "exampleUser"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "Password123!"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Dados inválidos ou já existentes
 *       500:
 *         description: Erro interno
 */
router.post("/register", userController.register);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Realiza login de um usuário
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "Password123!"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso, retorna token JWT
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno
 */
router.post("/login", userController.login);

export default router;
