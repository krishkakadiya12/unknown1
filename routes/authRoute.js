import express from "express";
import { registerController } from "../controllers/authController.js";
import { loginController, testController } from "../controllers/authController.js";
import { isAdmin, requiresignIn } from "../middlewares/authmiddleware.js";

const router = express.Router()

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/test', requiresignIn, isAdmin, testController)

export default router;