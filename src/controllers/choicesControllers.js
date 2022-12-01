import { ObjectId } from "mongodb";
import { choicesCollection } from "../database/db.js";

export async function postChoice(req, res) {
    const { newChoice } = res.locals;

    try {
        await choicesCollection.insertOne(newChoice);
        res.status(201).send(newChoice);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getChoices(req, res) {
    const { id } = req.params;

    try {
        const pollChoices = await choicesCollection
            .find({ pollId: ObjectId(id) })
            .toArray();

        res.send(pollChoices);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
