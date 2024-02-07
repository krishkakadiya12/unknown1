import productModel from "../models/productModel.js";

export const addController = async (req, res) => {
    try {
        const { name, imag, quantity, id, price, description, section } = req.body;

        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!imag) {
            return res.send({ message: 'imag is required' })
        }
        if (!quantity) {
            return res.send({ message: 'quantity is required' })
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
        const ep = await productModel.findOne({ id })
        if (ep) {
            return res.status(200).send({
                success: false,
                message: 'Already Added',
            })
        }

        const product = await new productModel({ name, imag, quantity, id, price, section, description }).save();

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

export const addQuantityController = async (req, res) => {
    try {
        const { id, quantity } = req.body;

        if (!id || !quantity) {
            return res.status(404).send({
                success: false,
                message: 'Enter All Details'
            })
        }

        const product = await productModel.findOne({ id })

        if (!product) {
            return res.status(404).send({
                success: false,
                message: "Product is not found"
            })
        }

        product.quantity += quantity;
        await product.save();

        res.status(200).send({
            success: true,
            message: 'Quantity updated successfully',
            product
        });

    } catch (e) {
        console.log(e);
        res.status(500).send({
            status: false,
            message: 'Something is Wrong',
        })
    }
}

export const viewProduct = async (req, res) => {
    try {
        const { id } = req.body;

        const product = await productModel.findOne({ id })
        if (!product) {
            res.status(404).send({
                status: false,
                message: 'Something is wrong',
            })
        }

        res.status(200).send({
            success: true,
            message: 'Product view',
            product,
        })

    } catch (e) {
        res.status(500).send({
            status: false,
            message: 'Something is wrong',
        })
    }
}

export const showData = async (req, res) => {
    try {
        const products = await productModel.find();
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

export const addQuantity = async (req,res) => {
    const idg = req.params;
    const qua = req.body;
    // console.log(idg.id);
    // console.log(qua.quantityToAdd);
    try{
        const updateorder = await productModel.findOneAndUpdate(
            {id : idg.id},
            { $inc: { quantity: parseInt(qua.quantityToAdd) } },
            {new : true}
        )

        if(updateorder){
            return res.status(200).send({
                success: true,
                message: 'Upadated quantity',
                updateorder
            });
        }else{
            return res.status(404).send({
                success: false,
                message: 'Error in update quantity'
            });
        }
    }
    catch(e){
        res.status(500).send({
            success: false,
            message: 'Error in add quantity'
        });
    }
}

export const decQuantity = async (req,res) => {
    const idg = req.params;
    const qua = req.body;
    // console.log(idg.id);
    // console.log(qua.quantity);
    try{
        const updateorder = await productModel.findOneAndUpdate(
            {id : idg.id},
            { $inc : {quantity : -parseInt(qua.quantity)}},
            {new : true}
        )
        if(updateorder){
            return res.status(200).send({
                success: true,
                message: 'Upadated quantity',
                updateorder
            });
        }else{
            return res.status(404).send({
                success: false,
                message: 'Error in update quantity'
            });
        }
    }catch(e){
        res.status(500).send({
            success: false,
            message: 'Not updated quantity'
        });
    }
}   