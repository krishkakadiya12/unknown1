import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('connect')
    } catch (e) {
        console.log('error detect', e);
    }
};

export default connectDB;