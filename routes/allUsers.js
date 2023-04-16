import express from "express";
import { requireSignin, isAdmin } from "../middlewares/auth.js";
import { getAllUsers } from "../controllers/getUsers.js";
const router = express.Router();
router.get("/getAllUsers", requireSignin, isAdmin, getAllUsers);
export default router;