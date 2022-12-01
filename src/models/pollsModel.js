import joi from "joi";

const pollsSchema = joi.object({
    title: joi.string().required().trim(),
    expireAt: joi.string().trim().min(0),
});

export default pollsSchema;
