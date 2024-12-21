import express, { Express } from "express";
import dotenv from "dotenv";
import blogController from './rest/blog';
import {LOGGER} from "./middlewares/Logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(LOGGER);
app.use("/api/blog", blogController);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

