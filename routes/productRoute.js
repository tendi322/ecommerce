const express = require('express')
const router = express.Router()
const {
  findAllProducts,
  findProduct,
  addProduct,
  updateProduct,deleteProduct
} = require('./../controllers/productController')

router.get('/', findAllProducts)

router.get('/:id', findProduct)
router.post('/', addProduct)
router.delete('/:id',deleteProduct)
router.patch('/:id',updateProduct)

module.exports = router
