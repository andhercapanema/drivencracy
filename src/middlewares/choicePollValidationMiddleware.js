import { pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
import { isPast } from "date-fns";

export default async function choicePollValidation(req, res, next) {
    const { pollId } = req.body;
    const poll = await pollsCollection.findOne({
        _id: ObjectId(pollId),
    });

    try {
        const pollIdExists = poll !== null;

        if (!pollIdExists)
            return res
                .status(404)
                .send(
                    "O pollId inserido não corresponde a nenhuma enquete cadastrada!"
                );
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

    if (isPast(poll.expireAt))
        return res.status(403).send("Essa enquete já expirou!");

    next();
}
