import express from 'express'

import {
    getAllProduct,
    getProductById,
    deleteproduct,
    addProduct,
    updateProduct
} from '../controller/productcontroller.js'

const router= express.Router()

router.post('/product',addProduct)
.get('/product',getAllProduct)
.get('/product/:id',getProductById)
.put('/product/update/:id',updateProduct)
.delete('/product/delete/:id',deleteproduct)

export default router;