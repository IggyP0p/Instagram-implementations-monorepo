import connect from "../../config/mongodb.js"

export const insertStories = async (data) => {
    const db = await connect();
    const result = await db.collection('stories').insertOne(data);

    return { _id : result.insertedId, ...data};
}