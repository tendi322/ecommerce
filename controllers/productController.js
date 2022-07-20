const Product = require('./../models/Product')

const findAllProducts = async(req, res) => {
  const {category,minPrice=0,maxPrice=10000000} = req.query;
  if(category){
    const products = await Product.find({category:{$in:category}}).find({price:{$gte:minPrice}}).find({price:{$lte:maxPrice}});
    res.render('index',{products})
  }else{
    const products = await Product.find().find({price:{$gte:minPrice}}).find({price:{$lte:maxPrice}});
    res.render('index',{products})
  }
}

const findProduct = async(req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  res.render('details',{product})
}

const addProduct = async(req, res) => {
  try {
    const product = new Product(req.body)
    await product.save()
    res.json({product})
  } catch (error) {
    res.send('Error occurred')
  }
}
const updateProduct = async(req,res)=>{
  const {id} = req.params
  try{
    const updatedProduct = await Product.findByIdAndUpdate(id,req.body,{new:true})
    res.json(updatedProduct)
  }catch(error){
    res.send('Error occured')
  }
}
const deleteProduct = async(req,res)=>{
  try {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndRemove(id)
    res.json(deletedProduct)
  } catch (error) {
    res.send('Error occured')
  }
}

module.exports = { findAllProducts, findProduct, addProduct, updateProduct,deleteProduct }
