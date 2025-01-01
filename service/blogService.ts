import {IBlogPost} from "../models/BlogPost";
import mongoose from 'mongoose';
import {BlogPost} from "../models/BlogPost";

export function createNewBlogService(dto: IBlogPost) {
    const newBlog = new BlogPost({
        header: dto.header,
        category: dto.category,
        content: dto.content,
    });
    if (dto.date)
        newBlog.date = dto.date;
    return newBlog.save();
}

export function getBlogServiceById(id: string)  {
    return BlogPost.findById(id);
}

export function getBlogByDateFromTo(from : Date, to : Date){
    return BlogPost.find({date: {$gte: from, $lte: to}});
}

export function getBlogFromNumberToNumber(from : number, to : number){
    return BlogPost.find().sort({ date: -1 }).skip(from).limit(to - from);
}