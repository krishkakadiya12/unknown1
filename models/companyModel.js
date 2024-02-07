import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    imag: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
})

export default mongoose.model('company', companySchema)