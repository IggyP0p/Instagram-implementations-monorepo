import connect from "../../config/mongodb.js"

export const insertUser = async (userData) => {
    const db = await connect();
    const result = await db.collection('usuarios').insertOne(userData);

    return { _id: result.insertedId, ...userData};
}
