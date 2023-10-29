const ProductModel = require('../models/product_model');

const ProductController = {
    createProduct : async function(req,res){
        try {
            const productData = req.body;
            const newProduct = new ProductModel(productData);
            await newProduct.save();
            return res.json({ success: true, data: newProduct,message:"New Product Created!" });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    },

    fetchAllProducts : async function(req,res){
        try {
            const products = await ProductModel.find();

            return res.json({ success: true, data: products });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    },
    fetchAllProductsByCategory : async function(req,res){
        try {
            const categoryId = req.params.id;
            const products = await ProductModel.find({category: categoryId});

            return res.json({ success: true, data: products });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    },



    
};

module.exports = ProductController;