import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
import productRoutes from './routes/productRoutes.js'
import companyRoutes from './routes/companyRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import Razorpay from 'razorpay';
import crypto from "crypto";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/auth', authRoutes);
app.use('/api/p1/product', productRoutes);
app.use('/api/c1/company', companyRoutes);
app.use('/api/o1/order', adminRoutes);
// app.use('api/o1/order', orderRoutes);

app.get('/', (req, res) => {
    res.send('<h1>run</h1>')
})

const PORT = 8000;

app.listen(PORT, () => {
    console.log('server run');
})