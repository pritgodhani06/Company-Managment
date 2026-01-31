import express from "express";
import { createUserController, getUserController } from "../controller/controller.js";

var userRouter = express.Router()
// const userRouter = express().Router();

userRouter.get("/user",getUserController);
userRouter.post("/user",createUserController);
userRouter.put("/user/:id",createUserController);
userRouter.patch("/user/:id",createUserController);
userRouter.delete("/user/:id",createUserController);

export default userRouter;

