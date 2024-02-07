import express from "express";
import { addController } from "../controllers/ordercontroller.js";

const router = express.Router();

router.post('/add', addController);

export default router;