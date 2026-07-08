import { ObjectId } from "mongodb";
import connect from "../../config/mongodb.js"

const messagesModel = {

  async insertMessage (data) {
    const db = await connect();
    const result = await db.collection('messages').insertOne(data);

    return { _id: result.insertedId, ...data};
  },

  /*TO DO test this method */
  async retrieveMessage(data) {
    const db = await connect();
    const result = await db.collection('messages').findOne(data);

    return { _id: result.insertedId, ...data}
  }

};

export default messagesModel;
