import connect from "../../config/mongodb.js"

export const insertMessage = async (data) => {
    const db = await connect();
    const result = await db.collection('messages').insertOne(data);

    return { _id: result.insertedId, ...data};
}