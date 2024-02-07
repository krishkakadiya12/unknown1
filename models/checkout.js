import mongoose from "mongoose";

const checkoutSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    quantity: {
        type: Object,
        required: true,
    },
    deliveryStatus: {
        type: String,
        enum: ['Pending', 'On the Way', 'Delivered'],
        default: 'Pending',
    },
}, { timestamps: true }
);

export default mongoose.model('checkout', checkoutSchema)