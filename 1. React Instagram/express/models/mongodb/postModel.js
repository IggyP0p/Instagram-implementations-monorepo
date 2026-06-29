import { ObjectId } from "mongodb";
import connect from "../../config/mongodb.js"

const postModel = {

    async insertPost (data) {
        const db = await connect();
        const result = await db.collection('post').insertOne(data);

        return { _id: result.insertedId, ...data};
    },

    async readPost (data) {
        const db = await connect();
        const result = await db.collection('post').findOne(
            { _id: new ObjectId(data) }
        );

        return result;
    },

    async deletePost (data) {
        const db = await connect();
        const result = await db.collection('post').deleteOne(
            { _id: new ObjectId(data) }
        );

        return result;
    }
}

export default postModel;