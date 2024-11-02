import { Express} from "express";

import { topicRoutes } from "./topic.route";

import { songRoutes } from "./song.route";
import { favoriteSongRoutes } from "./favorite-song.route";
import { searchRouter } from "./search.route";
const clientRoutes = (app: Express): void => {
    
    app.use("/topics", topicRoutes);
    app.use("/songs", songRoutes);
    app.use("/search", searchRouter);
    app.use("/favorite-songs", favoriteSongRoutes);
};

export default clientRoutes;