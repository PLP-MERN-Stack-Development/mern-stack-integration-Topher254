import express from "express";
import fs from 'fs'
import imageKit from "../config/imageKit.js";
import ImageKit from "imagekit";
import Blog from "../models/blog.js";

// CREATE BLOG
export const addBlog=async(req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished} =JSON.parse(req.body.blog);
        const imageFile=req.file;

        if(!title || !subTitle || !description ||!imageFile){
            return res.json({success:false,message:"missing all fields"})
        }
        const fileBuffer = fs.readFileSync(imageFile.path);
        // imagekit image ipload
        const response = await imageKit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
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


await Blog.create({title,subTitle,description,category,image,isPublished});
res.json({success:true,message:"Blog added"})


    } catch (error) {
res.json({success:false,message:error.message || "something went wrong"})

        
    }
}

// GET   BLOGS

export const getAllBlogs=async(req,res)=>{
    try {
        const blogs = await Blog.find({isPublished:true});
        res.json({success:true,blogs})
    } catch (error) {
        res.json({success:false,"message":error.message})
    }

}