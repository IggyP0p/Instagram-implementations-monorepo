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
        const result = await db.collection('usuarios').findOne(
            { _id: new ObjectId(userData) }
        );

        return result;
    },

    // NO USE 
    async getManyUsers(userData) {
        const db = await connect();
        const result = await db.collection('usuarios').find(
            { _id: new ObjectId(userData) }
        );

        return result;
    },

    async updateProfile(id, userData) {
        const db = await connect();
        const result = await db.collection('usuarios').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: userData },
            { returnDocument: 'after' }
        );

        return result;
    },

    // The idea is to change a variable named "active" from 1 to 0. So the account is not really deleted.
    async desactivateUser(userData) {
        const db = await connect();
        
        const result = await db.collection('usuarios').findOneAndUpdate(
            { _id: new ObjectId(userData)},
            { $set: {active: 0 } }
        );

        return result;
    }

};

export default userModel;