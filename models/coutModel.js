import mongoose from "mongoose";

const coutSchma = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    imag: {
        type: String,
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

export default mongoose.model('checkout', coutSchma)