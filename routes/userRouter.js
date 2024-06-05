import express from "express";
const userRouter = express.Router();
import {
  creatUserController,
  verifyUserEmail,
} from "../controllers/userController.js";

userRouter.post("/create", creatUserController);
userRouter.get("/verify", verifyUserEmail);

export default userRouter;
