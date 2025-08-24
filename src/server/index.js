import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbot from './chatbot.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));

app.get('/', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.post("/api/v1/chat", chatbot);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});