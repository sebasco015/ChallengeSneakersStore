import mongoose from "mongoose";

const uri ='mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/Challenge_KSBC?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin';
    
const connect = async () => {
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as any)
        console.log('Connected to MongoDB');
    }catch (error){
        console.error('Error connecting to MongoDB', error);
    }
};

export {connect};
