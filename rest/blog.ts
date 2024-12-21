
import Express from 'express';
const router = Express.Router();
import {createNewBlogService, getBlogServiceById} from "../serice/blogService";

router.get('/', (req : Express.Request, res: Express.Response) => {
    res.send('Blog Api');
});
router.post('/article', async (req : Express.Request, res: Express.Response) => {
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
export default router;