import ordermodel from "../models/order.js";

export const addController = async (req, res) => {
    try {
        const { order_id, name, email, mobile, address, city, zipCode, price, quantity } = req.body;
        if (!order_id) {
            return res.send({ message: 'Name is required' })
        }
        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!email) {
            return res.send({ message: 'Name is required' })
        }
        if (!mobile) {
            return res.send({ message: 'Name is required' })
        }
        if (!address) {
            return res.send({ message: 'Name is required' })
        }
        if (!city) {
            return res.send({ message: 'Name is required' })
        }
        if (!zipCode) {
            return res.send({ message: 'Name is required' })
        }
        if (!price) {
            return res.send({ message: 'Name is required' })
        }
        if (!quantity) {
            return res.send({ message: 'Name is required' })
        }
        const object = new ordermodel({ order_id, name, email, mobile, address, price, quantity })
        // console.log(object);
        const product = await object.save();
        // console.log(111);

        res.status(201).send({
            success: true,
            message: 'Product received',
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
