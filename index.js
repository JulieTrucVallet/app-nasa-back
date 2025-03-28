import cors from 'cors';
import 'dotenv/config';
import express from "express";
import connectDB from './database/event.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import authRouter from './routes/auth.js';

const PORT = process.env.PORT || 8010;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', authRouter)

app.get("/", authMiddleware, (req, res) =>
    res.send("Welcome to NASA's API")
)

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})