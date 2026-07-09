import connect from "../../config/mongodb.js"

const ConversationModel = {

  async insertConversation(data) {
    const db = await connect();
    const result = await db.collection('conversations').insertOne(data);

    return { _id: result.insertedId, ...data};
  },

  // TODO: test this method
  async bringConversations(data) {
    const db = await connect();
    const result = await db.collection('conversations').findOne(data);

    return result;
  },

  // TODO: Fix this method
  async deleteConversation(data) {
    const db = await connect();
    const result = await db.collection('conversations').deleteOne(data);

    return result;
  }
}

export default ConversationModel;
