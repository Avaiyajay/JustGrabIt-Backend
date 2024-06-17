import express from "express";
const productRouter = express.Router();
import {
  createProductController,
  getProducts,
} from "../controllers/productController.js";
import { storeFile, upload } from "../utils/imageUpload.js";

productRouter.post(
  "/add",
  //   storeFile("productImages").single("main_image"),
  upload.any(),
  createProductController
);
productRouter.get("/get-products", getProducts);
// Update Product
// Delete Product
// Get Product Or Products

export default productRouter;
