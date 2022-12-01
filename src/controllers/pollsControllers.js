import { choicesCollection, pollsCollection } from "../database/db.js";
import { ObjectId } from "mongodb";

export async function postPoll(req, res) {
    const { newPoll } = res.locals;

    try {
        await pollsCollection.insertOne(newPoll);

        res.status(201).send(newPoll);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getPolls(req, res) {
    try {
        const polls = await pollsCollection.find().toArray();
        res.send(polls);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
