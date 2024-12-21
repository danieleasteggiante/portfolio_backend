import {Request, Response} from "express";

export const LOGGER = (req: Request, res: Response, next: any) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}]: ${req.method} ${req.url}`);
    next();
}