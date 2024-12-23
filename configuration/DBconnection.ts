import mongoose from "mongoose";

export async function DBconnection (debug: boolean) {
    mongoose.set('debug', debug);
    const dbName = process.env.DB_NAME;
    if (!dbName) {
        console.log('DB_NAME is not defined');
        process.exit(1);
    }
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/' + process.env.DB_NAME);
    } catch (e) {
        console.log('Connection to DB failed ' + e);
        process.exit(1);
    }
    console.log('Connection to DB is established');
}