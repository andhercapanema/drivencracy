import { Router } from "express";
import {
    postPoll,
    getPolls,
    getPollsResult,
} from "../controllers/pollsControllers.js";
import pollExistsValidation from "../middlewares/pollExistsValidationMiddleware.js";
import pollBodyValidation from "../middlewares/pollBodyValidationMiddleware.js";
import pollExpireAtHandling from "../middlewares/pollExpireAtHandlingMiddleware.js";
import getMostVoted from "../middlewares/voteGetMostVotedMiddleware.js";

const router = Router();

router.post("/poll", pollBodyValidation, pollExpireAtHandling, postPoll);
router.get("/poll", getPolls);
router.get(
    "/poll/:id/result",
    pollExistsValidation,
    getMostVoted,
    getPollsResult
);

export default router;
