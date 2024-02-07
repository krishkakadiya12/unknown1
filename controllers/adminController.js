import checkoutmodel from "../models/checkout.js";

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
        const object = new checkoutmodel({ order_id, name, email, mobile, address, city, zipCode, price, quantity })
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

export const showController = async (req, res) => {
    try {
        const products = await checkoutmodel.find();
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
};

// export const updateOrderStatus = async (req, res) => {
//     const { id } = req.params;
//     const { newStatus } = req.body;

//     try {
//         const updatedOrder = await checkoutmodel.findOne({ order_id: id });

//         if (updatedOrder) {
//             updatedOrder.deliveryStatus = newStatus;
//             console.log(`${updatedOrder.deliveryStatus}`)
//             // console.log(updatedOrder);
//             await updatedOrder.save();
//             return res.status(200).send({
//                 success: true,
//                 message: 'Update successfully',
//                 updatedOrder
//             })
//         }
//     } catch (error) {
//         console.error('Error updating order status:', error);
//         res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// };

export const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { newStatus } = req.body;
    // console.log(newStatus);
    try {
        const updatedOrder = await checkoutmodel.findOneAndUpdate(
            { order_id: id },
            { deliveryStatus: newStatus },
            { new: true } // To return the updated document
        );
        console.log(updatedOrder)
        if (updatedOrder) {
            return res.status(200).send({
                success: true,
                message: 'Update successful',
                updatedOrder
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

