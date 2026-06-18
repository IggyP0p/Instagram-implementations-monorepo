import connect from "../../config/mongodb.js"

export const insertFollows = async (data) => {
    const db = await connect();
    const result = await db.collection('follows').insertOne(data);

    return { _id: result.insertedId, ...data};
}