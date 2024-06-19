import axios from 'axios';

const URL = 'http://localhost:3000';
export const getNews = async()=>{
   
    try {
        const response = await axios.get(`${URL}/news`);
        return response;
    } catch (error) {
        console.log('Error while calling get news api',error);
        throw error;
    }
}
