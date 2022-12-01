import { Router } from "express";
import pollsRouter from "./pollsRoutes.js";
import choicesRouter from "./choicesRoutes.js";

const router = Router();
router.use(pollsRouter);
router.use(choicesRouter);

export default router;
