import productSchema from '../model/product.js'

export const getAllProduct= async (req,res)=>{
    try {
        const products= await productSchema.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getProductById= async (req,res)=>{

    try {
        const findProduct= await productSchema.findById(req.params.id)
        res.json(findProduct)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const updateProduct= async (req,res)=>{
    try {
    const updateProduct= await productSchema.updateOne(req.params.id,req.body)
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}

export const deleteproduct= async (req,res)=>{

    try{
        const deleteprod= await productSchema.deleteOne({_id:req.params.id})
        res.status(201).json(deleteprod)
    }catch (error){
        res.status(404).json({message:error.message})
    }
}

export const addProduct= async (req,res)=>{
    const newProduct = new productSchema(req.body)
    try{
        const insertProduct = await newProduct.save()
        res.status(200).json(insertProduct)
    }catch (error){
        res.status(400).json({message:error.message})
    }
}