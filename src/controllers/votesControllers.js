import { ObjectId } from "mongodb";
import { votesCollection } from "../database/db.js";

export async function postVote(req, res) {
    const { id } = req.params;

    try {
        await votesCollection.insertOne({
            createdAt: new Date(),
            choiceId: ObjectId(id),
        });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
