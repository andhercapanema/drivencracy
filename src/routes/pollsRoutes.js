import { Router } from "express";
import { postPoll, getPolls } from "../controllers/pollsControllers.js";
import pollBodyValidation from "../middlewares/pollBodyValidationMiddleware.js";
import pollExpireAtHandling from "../middlewares/pollExpireAtHandlingMiddleware.js";

const router = Router();

router.post("/poll", pollBodyValidation, pollExpireAtHandling, postPoll);
router.get("/poll", getPolls);

export default router;
