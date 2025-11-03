import  jwt  from "jsonwebtoken";
import Blog from "../models/blog.js";
import Comment from "../models/comment.js";


 

export const adminLogin=async(req,res)=>{
    try {
        const {email,password} = req.body;
        if (email!==process.env.ADMIN_EMAIL || password!==process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Invalid credentials"});
           ;
            

        }
        const token = jwt.sign({email},process.env.JWT_SECRET);
        res.json({success:true,token})
    } catch (error) {
        res.json({message:error.message})
    }
}

export const getAllBlogsAdmin=async(req,res)=>{
    try {
        const blogs = (await Blog.find({})).toSorted({createdAt:-1});
        res.json({success:true,blogs})

    } catch (error) {
        res.json({message:error.message})
        
    }
}


// admin can see all comments whether approved or not
export const getAllComments = async(req,res)=>{
    try {
        Comments = (await Comment.find({}).populate("blog")).toSorted({createdAt:-1});
        res.json({success:true,Comments})

    } catch (error) {
        res.json({message:error.message})

        
    }
}


// dashboard data
export const getDashboard = async(req,res)=>{
    try {
        const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished:false});

        const dashboardData={
            blogs,comments,drafts
        }
        res.json({success:true,dashboardData})
        
    } catch (error) {
        res.json({message:error.message})
        
    }
}


// admin can delete comment
export const deleteCommentById=async(req,res)=>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
        res.status(200).json({message:"comment delted"})
    } catch (error) {
        
    }
}



// approcve comments
export const approveCommentById=async(req,res)=>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id,{isApproved:true});
        res.status(200).json({message:"comment approved"})
    } catch (error) {
        
    }
}