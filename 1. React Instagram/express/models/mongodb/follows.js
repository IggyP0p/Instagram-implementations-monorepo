import connect from "../../config/mongodb.js"

const FollowsModel = {

  async insertFollows(data) {
    const db = await connect();
    const result = await db.collection('follows').insertOne(data);

    return { _id: result.insertedId, ...data};
  },

  // TODO test this method
  async getFollows(data) {
    const db = await connect();
    const result = await db.collection('follows').findOne(data);

    return { result };
  }
};

export default FollowsModel;
