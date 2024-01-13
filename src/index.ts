import express,{ Express,Request,Response } from "express";
import cors from 'cors'
import connectDatabase from "./config/db";
import path from "path"
import productController from "./controller/productController";



const app:Express = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParse());

app.use(express.static(path.join(__dirname,"public")))

app.get("/product",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,'view/list.html'))
})

app.get("/addproduct",(req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,"view/add.html"))
})

app.post("/addproduct",productController.addProduct)

app.get("/get-products",productController.getProduct)

connectDatabase()


app.listen(5001,()=>console.log("server started at 5001"))
