import express from "express";
import Connection from './database/db.js';
import DeafaultData from "./default.js";
import router from "./routes/route.js";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 3000;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
    
}));
app.use('/', router);

const DB_URI = process.env.DB_URI;
Connection(DB_URI);
DeafaultData();
app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`)
});

