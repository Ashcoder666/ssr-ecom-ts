import mongoose,{Schema,Document,Types} from "mongoose";

interface IProduct extends Document {
    name:string,
    price:string,
    description:string
}

const productSchema : Schema<IProduct> = new Schema<IProduct>({
    name:{type:String,required:true},
    price:{type:String,required:true},
    description:{type:String,required:true}
})

const productModel = mongoose.model<IProduct>("products",productSchema)


export {productModel,IProduct}