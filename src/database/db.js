import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
} catch (err) {
    console.error(err);
}

const db = mongoClient.db("drivencracy");
export const pollsCollection = db.collection("poll");
export const optionsCollection = db.collection("poll");
export const votesCollection = db.collection("poll");