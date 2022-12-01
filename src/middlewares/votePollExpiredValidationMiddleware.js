import { pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
import { isPast } from "date-fns";

export default async function votePollExpiredValidation(req, res, next) {
    const {
        choiceVoted: { pollId },
    } = res.locals;

    const poll = await pollsCollection.findOne({
        _id: ObjectId(pollId),
    });

    if (isPast(poll.expireAt))
        return res.status(403).send({ message: "Essa enquete já expirou!" });

    next();
}
