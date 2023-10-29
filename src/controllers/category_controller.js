const CategoryModel = require('../models/category_model');

const CategoryController = {
    createCategory : async function(req,res){
        try {
            const categoryData = req.body;
            const newCategory = new CategoryModel(categoryData);
            await newCategory.save();
            return res.json({ success: true, data: newCategory,message:"New Category Created!" });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    },

    fetchAllCategories : async function(req,res){
        try {
            const categories = await CategoryModel.find();

            return res.json({ success: true, data: categories });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    },

    fetchCategoryById : async function(req,res){
        try {
            const id = req.params.id;
            const foundCategories = await CategoryModel.findById(id);

            if(!foundCategories){
                return res.json({success:false,message:"No Categories Found"})    
            }

            return res.json({ success: true, data: foundCategories });

            
        } catch (error) {
            return res.json({success:false,message:error})
            
        }
    }


    
};

module.exports = CategoryController;