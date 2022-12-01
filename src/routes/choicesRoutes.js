import { Router } from "express";
import { postChoice, getChoices } from "../controllers/choicesControllers.js";
import choiceBodyValidation from "../middlewares/choiceBodyValidationMiddleware.js";
import pollExistsValidation from "../middlewares/pollExistsValidationMiddleware.js";
import choicePollExpiredValidation from "../middlewares/choicePollExpiredValidationMiddleware.js";
import choiceNewTitleValidation from "../middlewares/choiceNewTitleValidationMiddleware.js";

const router = Router();

router.post(
    "/choice",
    choiceBodyValidation,
    pollExistsValidation,
    choicePollExpiredValidation,
    choiceNewTitleValidation,
    postChoice
);
router.get("/poll/:id/choice", pollExistsValidation, getChoices);

export default router;
