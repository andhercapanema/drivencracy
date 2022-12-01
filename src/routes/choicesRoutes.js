import { Router } from "express";
import { postChoice, getChoices } from "../controllers/choicesControllers.js";
import choiceBodyValidation from "../middlewares/choiceBodyValidationMiddleware.js";
import choicePollExistsValidation from "../middlewares/choicePollExistsValidationMiddleware.js";
import choicePollExpiredValidation from "../middlewares/choicePollExpiredValidationMiddleware.js";
import choiceNewTitleValidation from "../middlewares/choiceNewTitleValidationMiddleware.js";

const router = Router();

router.post(
    "/choice",
    choiceBodyValidation,
    choicePollExistsValidation,
    choicePollExpiredValidation,
    choiceNewTitleValidation,
    postChoice
);
router.get("/poll/:id/choice", choicePollExistsValidation, getChoices);

export default router;
