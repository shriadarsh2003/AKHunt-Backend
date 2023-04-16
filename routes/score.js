import express from 'express';

import { requireSignin } from "../middlewares/auth.js";
import { getScore } from '../controllers/score.js';

const router = express.Router();

router.get("/dashboard/user", requireSignin, getScore);

export default router;