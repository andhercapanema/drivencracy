import { Router } from "express";
import { postPoll, getPolls } from "../controllers/pollsControllers.js";

const router = Router();

router.post("/poll", postPoll);
router.get("/poll", getPolls);

export default router;
