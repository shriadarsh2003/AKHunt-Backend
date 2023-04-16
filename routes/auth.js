import express from "express";
// middlewares
import { requireSignin, isAdmin } from "../middlewares/auth.js";

// controllers
import { register, login, secret } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth-check", requireSignin, (req, res)=>{
    res.json({ok: true});
})


// testing
router.get("/secret", requireSignin, isAdmin, secret);


export default router;