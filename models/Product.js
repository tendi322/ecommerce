const mongoose = require('mongoose')
const ratingSchema = new mongoose.Schema({
    rate:Number,
    count:Number
})
const productSchema = mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    description:String,
    image:String,
    rating: ratingSchema
})

module.exports = new mongoose.model('Product', productSchema)