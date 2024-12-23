import mongoose from "mongoose";

export function DBconnection (debug: boolean) {
    mongoose.set('debug', debug);
    mongoose.connect('mongodb://127.0.0.1:27017/generativeDB')
        .then(r =>
        console.log('Connected to DB')
    ).catch(e => console.log(e));
}