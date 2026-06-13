import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());
app.use(rateLimiter);
// simple middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req link is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on http://localhost:5001");
});

// rWsvEfyX8jCNJ6bD

// mongodb+srv://umizwanmanda_db_user:rWsvEfyX8jCNJ6bD@thinkboard.xkopvwm.mongodb.net/?appName=thinkboard