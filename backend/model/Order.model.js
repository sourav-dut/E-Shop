import { Schema, model } from "mongoose"

const orderSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product_id: {
        type: [Schema.Types.ObjectId],  // Array of ObjectIds
        ref: "Product",                 // Reference to the Product collection
        required: true
    },
    address_id: {
        type: Schema.Types.ObjectId,
        ref: "Address",
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Out for delivery', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    paymentMode: {
        type: String,
        enum: ['COD', 'UPI', 'CARD', 'NET-BANKING'],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
}, {timestamps: true})

export const OrdreModel = model("Order", orderSchema);