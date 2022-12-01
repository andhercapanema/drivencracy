import { pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

export default async function pollExistsValidation(req, res, next) {
    const pollId = req.body.pollId || req.params.id;

    if (pollId.length !== 24)
        return res.status(422).send({
            message: "O pollID inserido necessita ter 24 caracteres!",
        });

    const poll = await pollsCollection.findOne({
        _id: ObjectId(pollId),
    });

    try {
        const pollIdExists = poll !== null;

        if (!pollIdExists)
            return res.status(404).send({
                message:
                    "O pollId inserido não corresponde a nenhuma enquete cadastrada!",
            });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

    res.locals.poll = poll;

    next();
}
