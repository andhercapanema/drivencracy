import { Router } from "express";
import { postChoice } from "../controllers/choicesControllers.js";
import choiceBodyValidation from "../middlewares/choiceBodyValidationMiddleware.js";
import choicePollValidation from "../middlewares/choicePollValidationMiddleware.js";
import choiceNewTitleValidation from "../middlewares/choiceNewTitleValidationMiddleware.js";

const router = Router();

router.post(
    "/choice",
    choiceBodyValidation,
    choicePollValidation,
    choiceNewTitleValidation,
    postChoice
);

export default router;
