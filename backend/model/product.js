import mongoose from 'mongoose'

const ProductSchema= mongoose.Schema({
        title:{
            type: String,
            require: true,
            unique: true
        } ,
        description:{
            type: String,
        
           
        },
        price:{
            type: Number,
            require: true,
           
        },
        discountPercentage:{
            type: Number,
            require: true,
            min:[0, "give discount 0 to 40"],
            max:[40, "give discount 0 t0 40"]
            
        },
        rating:{
            type: Number,
            default:0,
            min:[0,"give rating b/w 0-5" ],
            max:[5,'give rating b/w 0-5']
        },
       brand :{
            type: String,
            require: true,
            
        } ,
        catrgory:{
            type: String,
            require: true,
           
        }, 
        thumbnail:{
            type:String,
            require:true
        } ,
        images:[String]
});


export default mongoose.model('Product',ProductSchema)


