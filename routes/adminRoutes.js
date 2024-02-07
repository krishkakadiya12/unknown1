import express from "express";
import { addController, showController, updateOrderStatus } from "../controllers/adminController.js";

const router = express.Router();

router.post('/add', addController)
router.get('/show', showController)
router.put('/update/:id', updateOrderStatus);

export default router;