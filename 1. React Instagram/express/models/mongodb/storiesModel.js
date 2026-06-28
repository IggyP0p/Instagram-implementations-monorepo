import connect from "../../config/mongodb.js"
import { ObjectId } from "mongodb";

const storiesModel = {

    async insertStories (data) {
        const db = await connect();
        const result = await db.collection('stories').insertOne(data);

        return { _id : result.insertedId, ...data};
    },

    async deleteStories (data) {
        const db = await connect();
        const result = await db.collection('stories').deleteOne(
            { _id: new ObjectId(data) }
        );

        return result;
    }
}

export default storiesModel
