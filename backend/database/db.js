import mongoose from "mongoose";

const Connection = async(DB_URI)=>{
    
    try {
        await mongoose.connect(DB_URI);
        console.log('database connected successfully');
    } catch (error) {
        console.log("Error while connecting to database",error)
    }
}

export default Connection;