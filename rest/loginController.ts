import Express from "express";
const router = Express.Router();

import {performLogin} from "../service/loginService";

router.post('/', async (req : Express.Request, res: Express.Response) => {
    try {
        console.log('test',req.body);
        const result = await performLogin(req.body);
        console.log(result);
        res.json(result);
    } catch (e) {
        res.json(e);
    }
});

export default router;
