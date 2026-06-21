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
                postsCount: 0,
                active: 1
            }

            const user = await userModel.insertUser(newUserData);

            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    async login(req, res) {
        try {
            const { username, password } = req.body;

            const userData = {
                username,
                password
            }

            const user = await userModel.loggingUser(userData);

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
    },

    // For means of simplicity of the project there will not be differents endpoints to change meaningful data like password, email. But have in mind that these informations are valuable and would need a validation before changing.
    async update(req, res) {
        try {
            const { id } = req.params;

            const possibleFields = ["password", "email", "name", "bio", "avatarUrl"];

            const fieldsToChange = {};

            for (const field of possibleFields) {
                if (req.body[field] !== undefined) {
                    fieldsToChange[field] = req.body[field]
                }
            }

            const user = await userModel.updateProfile(id, fieldsToChange);

            return res.json(user);

        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    async deactivate(req, res) {
        try {
            const { id } = req.params;

            const user = await userModel.desactivateUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    async activate(req, res) {
        try {
            const { id } = req.params;

            const user = await userModel.activateUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });

        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;

            const user = await userModel.deleteUser(id);

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
            
        }
    }

};

export default userController;