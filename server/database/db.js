import mongoose from 'mongoose';

const Connection = async () =>{
    const URL = 'mongodb+srv://user:user@cluster0.f4t21.mongodb.net/MERN?retryWrites=true&w=majority'
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log("bete o bete moj kr di tum toh bade heavy  coder ho");
    }catch (error) {
        console.log('Error hai be',error)
    }


}

export default Connection;