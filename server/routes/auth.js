import express from "express";
import WrapAsync from "../utilities/WrapAsync.js";
import { Login, Logout, SignUp, Users } from "../controller/user.js";

const router = express.Router()


router.post("/signUp", WrapAsync(SignUp))
router.get("/login", WrapAsync(Login))
router.get("/logout", WrapAsync(Logout))


export default router
