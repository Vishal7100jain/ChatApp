import express from "express";
import WrapAsync from "../utilities/WrapAsync.js";
import { Login, Logout, SignUp, Users } from "../controller/user.js";

const router = express.Router()


router.post("/signUp", WrapAsync(SignUp))
router.post("/login", WrapAsync(Login))


export default router
