import { ObjectId } from "mongodb";
import { pollsCollection } from "../database/db.js";

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

export async function getPollsResult(req, res) {
    const { id } = req.params;
    const { result } = res.locals;

    try {
        const poll = (
            await pollsCollection.find({ _id: ObjectId(id) }).toArray()
        )[0];

        res.send({ ...poll, result });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
