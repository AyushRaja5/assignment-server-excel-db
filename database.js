import {connect} from 'mongoose'

// MongoDB connection URL
const url =  "mongodb+srv://AyushRaja:Ayush123@exceldatacluster.tsdnhzd.mongodb.net/db1"

// Function to connect to MongoDB
const connectToMongo = async() =>{
    try{
        await connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Db Connected Successfully")
    }
    catch(error){
        console.log(error);
    }
}

export default connectToMongo;