import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Pending" },
  paymentMethod: { type: String, default: false },
  payment: { type: Boolean, default: false },
  date: { type: Number, required: true },
  paymentStatus: { type: String, required: true, default: "Pending" },
});

const OrderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default OrderModel;
