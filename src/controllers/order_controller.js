const OrderModel = require("../models/order_model");
const CartModel = require("../models/cart_model");
// const razorpay = require('./../services/razorpay');


const OrderController = {
  createOrder: async function (req, res) {
    try {
      // const { user, items,status,totalAmount } = req.body;
      const { user, items,status } = req.body;

      // create order in razorpay
    //  razorPayOrderId = await razorpay.orders.create({
    //     amount: totalAmount*100,
    //     currency: "INR",
    //     notes:{
    //       "userid":user
    //     }
    //   });   

      const newOrder = new OrderModel({
        user: user,
        items: items,
        status:status,
        // totalAmount:totalAmount,
        // razorPayOrderId:razorPayOrderId
      });
      await newOrder.save();

      CartModel.findOneAndUpdate(
        {user:user._id},
        {items : []}
      )

      return res.json({
        success: true,
        data: newOrder,
        message: "Order Placed!",
      });
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  },

  fetchOrderesForUser: async function (req, res) {
    try {
      const userId = req.params.id;
      const foundOrders = await OrderModel.find({ "user._id": userId }).sort({createdOn : -1});
      return res.json({success:true,data: foundOrders})
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  },

  updateOrderStatus: async function (req, res) {
    try {
      const {orderId,status} = req.body;
      const updateOrder = await OrderModel.findByIdAndUpdate({_id:orderId},{ status:status },{ new:true })
      return res.json({success:true,data: updateOrder});
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  },
};

module.exports = OrderController;
