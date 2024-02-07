import coutModel from "../models/coutModel.js";

export const addController = async (req, res) => {
    try {
        const { name, imag, id, price, section, description } = req.body();
        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!imag) {
            return res.send({ message: 'imag is required' })
        }
        if (!id) {
            return res.send({ message: 'id is required' })
        }
        if (!price) {
            return res.send({ message: 'price is required' })
        }
        if (!section) {
            return res.send({ message: 'section is required' })
        }
        if (!description) {
            return res.send({ message: 'discription is required' })
        }
        const ep = await coutModel.findOne({ id })
        if (ep) {
            return res.status(200).send({
                success: true,
                message: 'Already Added',
            })
        }
        const product = await new coutModel({ name, imag, id, price, section, description }).save();

        res.status(201).send({
            success: true,
            message: 'Product added to cart',
        })
    } catch (e) {
        console.log(e);
        res.status(501).send({
            success: false,
            message: 'something is false',
        })
    }
}