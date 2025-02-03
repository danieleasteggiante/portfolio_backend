import Express from "express";
import {solveSudokuService} from "../service/sudokuResolverService";

const router = Express.Router();

router.post('/sudoku-resolver', async (req: Express.Request, res: Express.Response) => {
    console.log('resolving sudoku');
    const result = await solveSudokuService(req.body.sudoku);
    if (!result) {
        res.status(400).send('Invalid sudoku');
        return;
    }
    res.json(result);
});

export default router;