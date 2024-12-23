import mongoose from "mongoose";

export function DBconnection (debug: boolean) {
    mongoose.set('debug', debug);
    const dbName = process.env.DB_NAME;
    if (!dbName) {
        console.log('DB_NAME is not defined');
        process.exit(1);
    }
    mongoose.connect('mongodb://127.0.0.1:27017/' + process.env.DB_NAME)
        .then(r =>
        console.log('Connected to DB')
    ).catch(
        e => {
            console.log(e);
            process.exit(1);
        }
    );
}