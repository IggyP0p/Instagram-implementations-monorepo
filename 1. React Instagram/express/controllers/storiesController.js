import { insertStories } from "../models/mongodb/storiesModel";

export const createStory = async (req, res) => {
    try {
        const { authorId, mediaUrl } = req.body;

        const newStoryData = {
            authorId,
            mediaUrl
        }

        const newStory = await insertStories(newStoryData);

        return res.status(201).json(newStory);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}