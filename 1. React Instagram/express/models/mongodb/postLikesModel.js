import { ObjectId } from "mongodb";
import connect from "../../config/mongodb.js"

const likesModel = {

    async insertLike (data) {
        const db = await connect();
        const result = await db.collection('postLikes').insertOne(data);

        return { _id : result.insertedId, ...data};
    },

    async removeLike (data) {
        const db = await connect();
        const result = await db.collection('postLikes').deleteOne(
            { _id: new ObjectId(data) }
        );

        return { _id : result.insertedId, ...data};
    }
}

export default likesModel;