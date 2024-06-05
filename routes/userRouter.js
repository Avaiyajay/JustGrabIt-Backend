import express from "express";
const userRouter = express.Router();
import { creatUserController } from "../controllers/userController.js";

userRouter.get("/create", creatUserController);

export default userRouter;
