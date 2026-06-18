import connect from "../../config/mongodb.js"

export const insertPost = async (data) => {
    const db = await connect();
    const result = await db.collection('post').insertOne(data);

    return { _id: result.insertedId, ...data};
}