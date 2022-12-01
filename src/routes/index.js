import { Router } from "express";
import pollRouter from "./pollsRoutes.js";

const router = Router();
router.use(pollRouter);

export default router;
