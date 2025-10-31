import express from "express";
import { configDotenv } from "dotenv";
import connectDb from "./config/db.js";
configDotenv();

const PORT = process.env.PORT

const app = express();

// Middlewares
app.use(express.json());

// ROUTES
// public route
app.get('/', (req, res) => {
    res.send("Welcome to the Blog API..")
})

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