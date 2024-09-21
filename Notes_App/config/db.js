const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
    //         ,{ 
    //         useNewUrlParser : true,
    //         useUnifiedTopology: true,
            
    // }


    }catch(err){
         console.error('ERROR HAS BEEN GENERATED : ', err.message);
         process.exit(1);
    }

}

module.exports = connectDB;