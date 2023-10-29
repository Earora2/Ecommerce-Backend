const { Schema, model } = require('mongoose');


const productSchema = new Schema({
    user: { type: Map },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    
    price: { type: Number, required: [true, 'price is required'] },
    image: { type: Array, default:[] },
    title: { type: String, required: [true, 'title is required'] },
    description: { type: String, default: "" },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

productSchema.pre('save', function(next) {
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

productSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function(next) {
    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
});

const ProductModel = model('Products', productSchema);

module.exports = ProductModel;