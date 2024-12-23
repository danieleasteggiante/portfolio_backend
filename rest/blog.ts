
import Express from 'express';
const router = Express.Router();
import {createNewBlogService, getBlogByDateFromTo, getBlogServiceById} from "../service/blogService";
import {checkPassword} from "../middlewares/Auth";

router.get('/', (req : Express.Request, res: Express.Response) => {
    res.send('Blog Api');
});

router.post('/article', checkPassword, async (req : Express.Request, res: Express.Response) => {
    try {
        const result = await createNewBlogService(req.body);
        res.json(result.id);
    } catch (e) {
        res.send(e);
    }
});

router.get('/article/:id', async (req : Express.Request, res: Express.Response) => {
    try {
        const result = await getBlogServiceById(req.params.id);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/article/:from/:to', async (req : Express.Request, res: Express.Response) => {
    try {
        const result = await getBlogByDateFromTo(new Date(req.params.from), new Date(req.params.to));
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/article/:from', async (req : Express.Request, res: Express.Response) => {
    try {
        const result = await getBlogByDateFromTo(new Date(req.params.from), new Date());
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/article/:to', async (req : Express.Request, res: Express.Response) => {
    try {
        const result = await getBlogByDateFromTo(new Date(0), new Date(req.params.to));
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});
export default router;