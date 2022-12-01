import { choicesCollection } from "../database/db.js";

export default async function choiceNewTitleValidation(req, res, next) {
    const { title } = req.body;

    try {
        const titleAlreadyExists =
            (await choicesCollection.findOne({ title })) !== null;

        if (titleAlreadyExists)
            return res.status(409).send("Essa opção já existe!");
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }

    next();
}
