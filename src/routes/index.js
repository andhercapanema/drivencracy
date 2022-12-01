import { Router } from "express";
import pollsRouter from "./pollsRoutes.js";
import choicesRouter from "./choicesRoutes.js";
import votesRouter from "./votesRoutes.js";

const router = Router();
router.use(pollsRouter);
router.use(choicesRouter);
router.use(votesRouter);

export default router;
