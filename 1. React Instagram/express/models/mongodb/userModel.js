import connect from "../../config/mongodb.js"
import { ObjectId } from "mongodb";

const userModel = {
    
    async insertUser(userData) {
        const db = await connect();
        const result = await db.collection('usuarios').insertOne(userData);

        return { _id: result.insertedId, ...userData};
    },

    async getUser(userData) {
        const db = await connect();
        const result = await db.collection('usuarios').findOne({ _id: new ObjectId(userData) });

        return result;
    }
};

export default userModel;