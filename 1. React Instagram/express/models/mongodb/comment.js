import connect from "../../config/mongodb.js"

const CommentModel = {

  async insertComment(data) {
    const db = await connect();
    const result = await db.collection('comment').insertOne(data);

    return { _id: result.insertedId, ...data};
  },

  // TODO: test this method
  async deleteComment(data) {
    const db = await connect();
    const result = await db.collection('comment').deleteOne(data);

    return { _id: result.insertedId, ...data};
  }
};

export default CommentModel;
