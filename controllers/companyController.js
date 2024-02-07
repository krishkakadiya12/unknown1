import companyModel from "../models/companyModel.js";

export const addController = async (req, res) => {
    try {
        const { name, imag, description } = req.body;

        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!imag) {
            return res.send({ message: 'imag is required' })
        }
        if (!description) {
            return res.send({ message: 'discription is required' })
        }

        const product = await new companyModel({ name, imag, description }).save();

        res.status(201).send({
            success: true,
            message: 'Product added successfully',
            product
        })
    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: 'Not Add Properly',
        })
    }
}

export const showData = async (req, res) => {
    try {
        const products = await companyModel.find();
        res.status(200).send({
            success: true,
            message: 'All products retrieved successfully',
            products
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            success: false,
            message: 'Something went wrong while fetching products',
        });
    }
}