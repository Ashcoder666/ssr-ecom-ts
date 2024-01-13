import { Request, Response } from "express";
import { productModel } from "../model/product";
const productController = {
  addProduct: async (req: Request, res: Response) => {
    const { name, price, description } = req.body;
    try {
      const newProduct = await productModel.create({
        name,
        price,
        description,
      });

      return res.status(201).json({ message: "success" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  getProduct : async(req: Request, res: Response)=>{
    try {
        const products = await productModel.find({})
        return res.status(201).send(products)
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
      }
  }
};


export default productController;