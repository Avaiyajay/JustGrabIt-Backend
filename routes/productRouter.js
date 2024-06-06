import express from "express";
const productRouter = express.Router();
import { createProductController } from "../controllers/productController.js";
import { storeFile } from "../utils/imageUpload.js";

productRouter.post(
  "/add",
  storeFile("productImages").single("main_image"),
  createProductController
);
// Update Product
// Delete Product
// Get Product Or Products

export default productRouter;
