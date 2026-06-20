import express from "express";

import userRoutes from "./routes/userRoutes.js";
import storiesRoutes from "./routes/storiesRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import postLikesRoutes from "./routes/postLikesRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import followsRoutes from "./routes/followsRoutes.js";
import conversationsRoutes from "./routes/conversationsRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", storiesRoutes);
app.use("/api", postRoutes);
app.use("/api", postLikesRoutes);
app.use("/api", messagesRoutes);
app.use("/api", followsRoutes);
app.use("/api", conversationsRoutes);
app.use("/api", commentRoutes);

export default app;