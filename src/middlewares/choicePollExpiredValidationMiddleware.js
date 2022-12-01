import { pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";
import { isPast } from "date-fns";

export default async function choicePollExpiredValidation(req, res, next) {
    const { poll } = res.locals;

    if (isPast(poll.expireAt))
        return res.status(403).send({ message: "Essa enquete já expirou!" });

    next();
}
