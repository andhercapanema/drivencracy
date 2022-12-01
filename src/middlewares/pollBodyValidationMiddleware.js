import pollsSchema from "../models/pollsModel.js";

export default function pollBodyValidation(req, res, next) {
    const { title, expireAt } = req.body;

    const { value, error } = pollsSchema.validate(
        { title, expireAt },
        {
            abortEarly: false,
        }
    );

    if (error !== undefined)
        return res
            .status(422)
            .send(error.details.map((detail) => detail.message));

    res.locals.newPoll = value;

    next();
}
