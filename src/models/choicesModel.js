import joi from "joi";

const choicesSchema = joi.object({
    title: joi.string().required().trim(),
    pollId: joi.string().required().trim().length(24),
});

export default choicesSchema;
