import mongoose from 'mongoose'

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the MONGODB")
    }catch(error){
        console.error('Error in connecting with the Database',error.message)
        process.exit(1);
    }
}