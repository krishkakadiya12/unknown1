import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    imag: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    id: {
        type: String,
        require: true,
        unique: true,
    },
    price: {
        type: Number,
        require: true,
    },
    section: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
})

export default mongoose.model('product', modelSchema)