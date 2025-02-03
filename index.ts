import express, { Express } from "express";
import dotenv from "dotenv";
import blogController from './rest/blogController';
import loginController from './rest/loginController';
import cvController from './rest/cvController';
import {LOGGER} from "./middlewares/Logger";
import { DBconnection} from "./configuration/DBconnection";
import cors from "cors";
import {createServer} from "node:http";
import {Server} from "socket.io";
import {chatHandler, socketConfig} from "./configuration/socketConfig";
import projectsController from "./rest/projectsController";

dotenv.config();
const debugMode = process.env.DEBUG ? process.env.DEBUG === 'true' : false
DBconnection(debugMode);
const app: Express = express();
const server = createServer(app);
const io = new Server(server, socketConfig);
app.use(cors());
const port = process.env.PORT;
app.use(LOGGER);
app.use(express.json());
app.use("/api/blog", blogController);
app.use(("/api/login"), loginController);
app.use("/api/cv", cvController)
app.get("/api/chat", (req, res) => {
    // non è necessario un endpoint per la chat, ma è utile per testare la connessione
    res.send("Websocket connection...");
});

app.use("/api/projects", projectsController);
chatHandler(io);

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    debugMode && console.log(`[server]: Server runs in debug mode.`);
});

