import connect from "../../config/mongodb.js"

const userModel = {
    
    async insertUser(userData) {
        const db = await connect();
        const result = await db.collection('usuarios').insertOne(userData);

        return { _id: result.insertedId, ...userData};
    }
};

export default userModel;