const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";
// const mongoURI = "mongodb+srv://Yashin786:pdR9MKIaLu4rlzyY@inotebook.wn1jqn2.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo SuccessFully.")
    })
}

module.exports = connectToMongo;


