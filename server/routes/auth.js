import express from "express";
import WrapAsync from "../utilities/WrapAsync.js";
import { Login, SignUp } from "../controller/auth.js";

const router = express.Router()


router.post("/signUp", WrapAsync(SignUp))
router.post("/login", WrapAsync(Login))


export default router
