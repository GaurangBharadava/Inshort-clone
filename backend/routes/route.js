import express from "express";
import { getNews } from "../controller/newsController.js";
const router = express.Router();

router.get('/news',getNews);

export default router;