import news from "../model/schema.js"
export const getNews = async (req,res)=>{
    try {
        let data = await news.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message : data.message});
    }
}