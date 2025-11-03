import express from "express";
import fs from 'fs'
import imageKit from "../config/imageKit.js";
import ImageKit from "imagekit";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";

// CREATE BLOG
export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !subTitle || !description || !imageFile) {
            return res.json({ success: false, message: "missing all fields" })
        }
        const fileBuffer = fs.readFileSync(imageFile.path);
        // imagekit image ipload
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })
        // then optimize usansformation
        // ing url tr
        const optimizedImageURL = imageKit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                { width: '1280' }
            ]
        });

        // strorein avriable
        const image = optimizedImageURL;


        await Blog.create({ title, subTitle, description, category, image, isPublished });
        res.json({ success: true, message: "Blog added" })


    } catch (error) {
        res.json({ success: false, message: error.message || "something went wrong" })


    }
}

// GET   BLOGS

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ success: true, blogs })
    } catch (error) {
        res.json({ success: false, "message": error.message })
    }

}


// blog by id
export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({ "message": "blog not found" })
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(404).json({ "message": error.message })
    }
}


// delete a blog
export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id)

        // delete all comments asscoiated
        await Comment.deleteMany({ blog: id })



        res.status(200).json({ "message": "blog deleted" })
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
}


// publish or unpublish
export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save()
        res.status(200).json({ "message": "publish edited" })

    } catch (error) {
        res.status(500).json({ "message": error.message })

    }
}

// add comment to a blog
export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        await Comment.create({ blog, name, content });
        res.status(200).json({ message: "comment added for review" })

    } catch (error) {
        res.status(500).json({ "message": error.message })

    }
}


export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = (await Comment.find({ blog: blogId, isApproved: true })).toSorted({ createdAt: -1 });
        res.status(200).json(comments)

    } catch (error) {
        res.status(500).json({ "message": error.message })

    }
}