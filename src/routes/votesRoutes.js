import { Router } from "express";
import { postVote } from "../controllers/votesControllers.js";
import voteChoiceExistsValidation from "../middlewares/voteChoiceExistsValidationMiddleware.js";
import votePollExpiredValidation from "../middlewares/votePollExpiredValidationMiddleware.js";

const router = Router();

router.post(
    "/choice/:id/vote",
    voteChoiceExistsValidation,
    votePollExpiredValidation,
    postVote
);

export default router;
