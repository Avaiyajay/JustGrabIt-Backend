import express from "express";
const router = express.Router();

// Importing all the routers
import productRouter from "./productRouter.js";
import userRouter from "./userRouter.js";

router.use("/product", productRouter);
router.use("/user", userRouter);

export default router;
