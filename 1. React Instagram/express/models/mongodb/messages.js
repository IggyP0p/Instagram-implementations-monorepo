import connect from "../../config/mongodb";

export const insertMessage = async (data) => {
    const db = await connect();
    const result = await db.collection('messages').insertOne(data);

    return { _id: result.insertedId, ...data};
}