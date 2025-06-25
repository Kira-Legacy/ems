import express from "express";
import { login } from "../controllers/authController.js"

const route = express.Router()
router.post('/login', login);

export default router;