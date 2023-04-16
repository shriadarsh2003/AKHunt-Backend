import express from 'express';

// middlwares
import { requireSignin} from "../middlewares/auth.js";

// controllers
import { que1, que2, que3, que4, que5, que6, que7, que8 } from "../controllers/answer.js";

const router = express.Router();

router.post("/que1", requireSignin, que1);
router.post("/que2", requireSignin, que2);
router.post("/que3", requireSignin, que3);
router.post("/que4", requireSignin, que4);
router.post("/que5", requireSignin, que5);
router.post("/que6", requireSignin, que6);
router.post("/que7", requireSignin, que7);
router.post("/que8", requireSignin, que8);

export default router;