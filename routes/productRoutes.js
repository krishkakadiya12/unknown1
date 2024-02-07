import express from "express";
import { addController, addQuantityController, viewProduct, showData, addQuantity, decQuantity } from "../controllers/productController.js";

const router = express.Router();

router.post('/add', addController);
router.get('/', showData);
router.post('/aquantity', addQuantityController);
router.post('/vproduct', viewProduct);
router.put('/update/:id', addQuantity)
router.put('/dec/:id', decQuantity)

export default router;