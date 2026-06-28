import storiesModel from "../models/mongodb/storiesModel.js";

const storiesController = {

    async createStory (req, res) {
        try {
            const { authorId, mediaUrl } = req.body;

            const newStoryData = {
                authorId,
                mediaUrl
            }

            const newStory = await storiesModel.insertStories(newStoryData);

            return res.status(201).json(newStory);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },

    async deleteStory (req, res) {
        try {
            const { id } = req.params;

            const oldStory = await storiesModel.deleteStories(id);

            return res.status(201).json(oldStory);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

};

export default storiesController

