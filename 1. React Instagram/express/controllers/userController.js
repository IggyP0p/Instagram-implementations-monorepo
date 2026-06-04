import { insertUser } from '../models/mongodb/userModel.js'

export const createUser = async (req, res) => {
    try {
        const { username, password, email, name, bio, avatarUrl } = req.body;

        const newUserData = {
            username,
            password, 
            email,
            name,
            bio: bio || "",
            avatarUrl: avatarUrl || "",
            followersCount: 0,
            followingCount: 0,
            postsCount: 0
        }

        const newUser = await insertUser(newUserData);

        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
};