import express from "express";
const productRouter = express.Router();
import { createProductController } from "../controllers/productController.js";

productRouter.post("/create", createProductController);
// Update Product
// Delete Product
// Get Product Or Products

export default productRouter;
