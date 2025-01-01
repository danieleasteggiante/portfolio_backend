import {hashPassword} from "../middlewares/Auth";
import logger from "../configuration/Logger";

export async function performLogin(body: any) {
    const username = process.env.ADMIN_USER;
    const password = process.env.ADMIN_PASSWORD;
    if (body.username === username && body.password === password) {
        const apiPassword = process.env.API_PASSWORD;
        const token = await hashPassword(apiPassword!);
        return {token};
    }
    throw new Error('Unauthorized');
}