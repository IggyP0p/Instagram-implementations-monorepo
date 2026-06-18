import connect from "../../config/mongodb.js"

export const insertComment = async (data) => {
    const db = await connect();
    const result = await db.collection('comment').insertOne(data);

    return { _id: result.insertedId, ...data};
}