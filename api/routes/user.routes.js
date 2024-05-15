import express from "express";
import { test } from "../controlers/user.controler.js ";

const userRouter = express.Router();

userRouter.get("/test", test);

export default userRouter;
