import { ObjectId } from "mongodb";
import { choicesCollection, votesCollection } from "../database/db.js";

export default async function getMostVoted(req, res, next) {
    const { id } = req.params;

    try {
        const options = await choicesCollection
            .find({ pollId: ObjectId(id) })
            .toArray();

        const optionsWithVotes = options.map((option) => ({
            ...option,
            votes: 0,
        }));

        for (const option of optionsWithVotes) {
            const votesAmount = await votesCollection
                .find({ choiceId: option._id })
                .toArray();

            option.votes = votesAmount.length;
        }

        const mostVotedAmount = optionsWithVotes
            .map((option) => option.votes)
            .reduce((acc, cur) => (cur > acc ? (acc = cur) : acc), 0);

        const mostVotedOption = optionsWithVotes
            .filter(({ votes }) => votes === mostVotedAmount)
            .map(({ title, votes }) => ({ title, votes }));

        res.locals.result = mostVotedOption;
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

    next();
}
