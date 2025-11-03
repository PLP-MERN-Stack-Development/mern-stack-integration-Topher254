import express from "express";
import connectDb from "./config/db.js";
import cors from 'cors';
import adminRouter from "./routes/adminRoute.js";
import dotenv from "dotenv";
import blogRouter from "./routes/blogRoutes.js";
dotenv.config();



const PORT = process.env.PORT || 5001;

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// ROUTES
// public route
app.get('/', (req, res) => {
    res.send("Welcome to the Blog API..")
})

app.use('/api/admin',adminRouter);
app.use('/api/blog',blogRouter);



//spin it
app.listen(PORT, () => {
    try {
        connectDb();
        console.log(`Blog server running on http://localhost:${PORT}`);

    } catch (error) {
        console.log("App error", error.message);


    }

})

export default app;