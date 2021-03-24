import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModels.js';

const productRouter = express.Router();

productRouter.get(
    '/seed', 
    expressAsyncHandler(async(req,res) => {
    const createdProducts = await Product.insertMany(data.products);
    res.send( { createdproducts });
})
);

productRouter.get('/', 
expressAsyncHandler(async (req, res) => {
  const products = await Product.find()
  res.send({ products });
}));

productRouter.get(
    '/:id', 
    expressAsyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    console.log('xablau');
    if(product){
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
})
);

export default productRouter;