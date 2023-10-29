const { Schema, model } = require('mongoose');

const cartItemSchema = new Schema({
    product : {type: Schema.Types.ObjectId,ref:'Products'},
    quantity : {type: Number,default:1}
})
const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref:'User' },
    items: { type: [cartItemSchema], default: [] },
    updatedOn: { type: Date },
    createdOn: { type: Date }
});

CartSchema.pre('save', function(next) {
    this.updatedOn = new Date();
    this.createdOn = new Date();

    next();
});

CartSchema.pre(['update', 'findOneAndUpdate', 'updateOne'], function(next) {
    const update = this.getUpdate();
    delete update._id;

    this.updatedOn = new Date();

    next();
});

const CartModel = model('Cart', CartSchema);

module.exports = CartModel;