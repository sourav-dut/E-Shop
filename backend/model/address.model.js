import mongoose, { Schema, model } from "mongoose";

const addressSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pinCode: { type: Number}
}, {timestamps: true})

const addressModel = model('addresses', addressSchema);

export default addressModel;