import choicesSchema from "../models/choicesModel.js";

export default function choiceBodyValidation(req, res, next) {
    const { title, pollId } = req.body;
    const newChoice = { title, pollId };

    const { error } = choicesSchema.validate(newChoice, { abortEarly: false });

    if (error !== undefined)
        return res
            .status(422)
            .send(error.details.map((detail) => detail.message));

    res.locals.newChoice = newChoice;

    next();
}
