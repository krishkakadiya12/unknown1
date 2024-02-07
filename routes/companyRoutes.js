import express from "express";
import { showData, addController } from "../controllers/companyController.js";

const router = express.Router();

router.post('/add', addController)
router.get('/', showData);

export default router;