import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const BlogPostSchema =  new Schema({
    header: String,
    category: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now },
},{ collection: 'articles' });

export interface IBlogPost {
    header: string,
    category: string,
    content: string,
    date?: Date,
}

export const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

