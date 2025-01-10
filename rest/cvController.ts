import Express from 'express';

const router = Express.Router();
import path from 'path';
import fs from 'fs';


import {createPDF, getCV} from '../service/cvService';

router.get('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const result = getCV();
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

router.get('/pdf', async (req: Express.Request, res: Express.Response) => {
    const filePath = await createPDF();
    try {
        res.sendFile(path.resolve(filePath));
    } catch (e) {
        res.status(500).json(e);
    }
});

export default router;