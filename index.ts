import express, { Express } from "express";
import dotenv from "dotenv";
import blogController from './rest/blogController';
import loginController from './rest/loginController';
import {LOGGER} from "./middlewares/Logger";
import { DBconnection} from "./configuration/DBconnection";
import cors from "cors";

dotenv.config();
const debugMode = process.env.DEBUG ? process.env.DEBUG === 'true' : false
DBconnection(debugMode);
const app: Express = express();
app.use(cors());
const port = process.env.PORT;
app.use(LOGGER);
app.use(express.json());
app.use("/api/blog", blogController);
app.use(("/api/login"), loginController);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    debugMode && console.log(`[server]: Server runs in debug mode.`);
});

