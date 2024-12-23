import Express from 'express';

export function checkPassword(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const password = req.headers['x-api-key'];
    const validPassword = process.env.API_PASSWORD;
    if (password && password === validPassword)
        next();
    res.status(401).send('Unauthorized');

}