import { choicesCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

export default async function voteChoiceExistsValidation(req, res, next) {
    const { id } = req.params;

    if (id.length !== 24)
        return res.status(422).send({
            message: "O pollID inserido necessita ter 24 caracteres!",
        });

    const choiceVoted = await choicesCollection.findOne({
        _id: ObjectId(id),
    });

    try {
        const choiceExists = choiceVoted !== null;

        if (!choiceExists)
            return res.status(404).send({
                message:
                    "O ID inserido não corresponde a nenhuma opção cadastrada!",
            });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

    res.locals.choiceVoted = choiceVoted;

    next();
}
