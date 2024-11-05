import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import path from "path";
import methodOverride from "method-override";

import clientRoutes from "./routes/client/index.route";
import adminRoutes from "./routes/admin/index.route";
import { systemConfig } from "./config/config";

dotenv.config();

database.connect();

const app : Express = express();
const port: Number | String = process.env.PORT || 3000;

app.use(methodOverride("_method"));
// CLient Routes
clientRoutes(app);

// Admin Routes
adminRoutes(app);

app.use(express.static(`${__dirname}/public`));


app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.set("views", `${__dirname}/views`);
app.set('view engine', 'pug');


// TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));

//body- parser dùng cho form
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});