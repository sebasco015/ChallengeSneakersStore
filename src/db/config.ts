import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect( process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as any)
        console.log('Connected to MongoDB');
    }catch (error){
        console.error('Error connecting to MongoDB', error);
    }
};

export default connect;
