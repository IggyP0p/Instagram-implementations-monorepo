import connect from "../../config/mongodb";

export const insertLikes = async (data) => {
    const db = await connect();
    const result = await db.collection('postLikes').insertOne(data);

    return { _id : result.insertedId, ...data};
}