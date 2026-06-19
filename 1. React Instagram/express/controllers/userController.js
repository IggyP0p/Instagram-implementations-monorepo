import userModel from '../models/mongodb/userModel.js'

const userController = {

    async create(req, res) {
        try {
            const { username, password, email, name } = req.body;

            const newUserData = {
                username,
                password, 
                email,
                name,
                bio: "",
                avatarUrl: "",
                followersCount: 0,
                followingCount: 0,
                postsCount: 0
            }

            const user = await userModel.insertUser(newUserData);

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    async findById(req, res) {
        try {
            const { id } = req.params;

            const user = await userModel.getUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.json(user)
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    }
};

export default userController;