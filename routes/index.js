import express from "express";
const router = express.Router();

// Importing all the routers
import productRouter from "./productsRouter.js";

router.use("/posts", productRouter);

export default router;
