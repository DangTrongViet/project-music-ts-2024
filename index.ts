import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";


import clientRoutes from "./routes/client/index.route";

dotenv.config();

database.connect();

const app : Express = express();
const port: Number | String = process.env.PORT || 3000;


// CLient Routes
clientRoutes(app);

app.use(express.static("public"));

app.set("views", "./views");
app.set('view engine', 'pug');


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});