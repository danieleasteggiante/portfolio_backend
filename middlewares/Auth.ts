import Express from 'express';
import crypto from 'crypto';

function getValueFromHeader(req: Express.Request, key: string) {
    if (!req.headers[key])
        throw new Error('Header is not defined');
    if (Array.isArray(req.headers[key]))
        return req.headers[key][0];
    return req.headers[key];
}

export function checkPassword(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
    const password = getValueFromHeader(req, 'x-api-password');
    const validPassword = process.env.API_PASSWORD;
    if (password && hashPassword(password) === hashPassword(validPassword!))
        next();
    res.status(401).send('Unauthorized');
}

async function hashPassword(password: string) {
    if (!password)
        throw new Error('Password is not defined');
    const secret = process.env.SECRET_KEY;
    if (!secret)
        throw new Error('Secret key is not defined');
    return crypto.createHmac('sha256', process.env.SECRET_KEY!).update(password).digest('hex');
}