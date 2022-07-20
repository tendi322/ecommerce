const mongoose = require('mongoose')

const connectDatabase =  async() =>{
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/ecom')
    console.log("database is connected");
    } catch (error) {
        console.log("Error occured");
    }
}
module.exports = connectDatabase