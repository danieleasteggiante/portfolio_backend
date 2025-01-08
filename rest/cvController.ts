import Express from 'express';
const router = Express.Router();

import {getCV} from '../service/cvService';

router.get('/', async (req: Express.Request, res: Express.Response) => {
    try {
        const result = getCV();
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

export default router;