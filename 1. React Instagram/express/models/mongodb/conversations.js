import connect from "../../config/mongodb";

export const insertConversation = async (data) => {
    const db = await connect();
    const result = await db.collection('conversations').insertOne(data);

    return { _id: result.insertedId, ...data};
}