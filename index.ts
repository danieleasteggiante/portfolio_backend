import express, { Express } from "express";
import dotenv from "dotenv";
import blogController from './rest/blog';
import {LOGGER} from "./middlewares/Logger";
import mongoose from "mongoose";

mongoose.set('debug', true); // Enable debug mode
mongoose.connect('mongodb://127.0.0.1:27017/generativeDB').then(r =>
    console.log('Connected to DB')
).catch(e => console.log(e));
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(LOGGER);
app.use(express.json());
app.use("/api/blog", blogController);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

