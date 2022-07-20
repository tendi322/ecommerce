const mongoose = require('mongoose')

const connectDatabase =  async() =>{
    try {
        mongoose.connect('mongodb+srv://root:root@cluster0.aw1hu.mongodb.net/ecommerce?retryWrites=true&w=majority')
    console.log("database is connected");
    } catch (error) {
        console.log("Error occured");
    }
}
module.exports = connectDatabase