import { ObjectId } from "mongodb";
import choicesSchema from "../models/choicesModel.js";

export default function choiceBodyValidation(req, res, next) {
    const { title, pollId } = req.body;
    const newChoice = { title, pollId: ObjectId(pollId) };

    const { error } = choicesSchema.validate(
        { title, pollId },
        { abortEarly: false }
    );

    if (error !== undefined)
        return res
            .status(422)
            .send(error.details.map((detail) => detail.message));

    res.locals.newChoice = newChoice;

    next();
}
