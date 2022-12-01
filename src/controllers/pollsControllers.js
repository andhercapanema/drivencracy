import { parse, sub, add } from "date-fns";
import ptBR from "date-fns/locale/pt-BR/index.js";
import { pollsCollection } from "../database/db.js";

export async function postPoll(req, res) {
    const { title, expireAt } = req.body;

    if (title === "") return res.sendStatus(422);

    let parsedExpireAt;

    if (expireAt === "") {
        parsedExpireAt = add(new Date(), { days: 30, hours: -3 });
    } else {
        parsedExpireAt = sub(
            parse(expireAt, "yyyy-MM-dd HH:mm", new Date(), {
                locale: ptBR,
            }),
            { hours: 3 }
        );
    }

    try {
        await pollsCollection.insertOne({
            title,
            expireAt: parsedExpireAt,
        });

        res.sendStatus(201);
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
