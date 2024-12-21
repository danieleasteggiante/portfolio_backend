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