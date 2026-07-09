import FollowsModel from "../models/mongodb/follows.js";

const FollowsController = {

  async createFollow(req, res) {
    try {
        const { followerId, followingId, createdAt } = req.body;

        const newFollowsData = {
            followerId,
            followingId,
            createdAt
        }

        const newFollows = await FollowsModel.insertFollows(newFollowsData);

        return res.status(201).json(newFollows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  },

  // TODO: test this method
  async retrieveFollows(req, res) {
    try {
      const { id } = req.params;

        const newFollows = await FollowsModel.getFollows(id);

        return res.status(201).json(newFollows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
  }
}

export default FollowsController;
