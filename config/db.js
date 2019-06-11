const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoconn');

const connectDB = () => {
    try {
        mongoose.connect(db,{
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify: false
        });
    
        console.log("Mongo DB connected");
    } catch (err) {
        console.log('UNABLE To CONNECT');
        process.exit();
    }
};

module.exports = connectDB;