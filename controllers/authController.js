import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import Jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        if (!name) {
            return res.send({ message: 'Name is required' })
        }
        if (!email) {
            return res.send({ message: 'email is required' })
        }
        if (!password) {
            return res.send({ message: 'password is required' })
        }
        if (!phone) {
            return res.send({ message: 'phone is required' })
        }
        if (!address) {
            return res.send({ message: 'address is required' })
        }

        const existinguser = await userModel.findOne({ email })
        if (existinguser) {
            return res.status(200).send({
                success: true,
                message: 'Already register please login',
            })
        }

        const hashedpassword = await hashPassword(password);
        const user = await new userModel({ name, email, phone, address, password: hashedpassword }).save();

        res.status(201).send({
            success: true,
            message: 'User register successfully',
            user
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }
        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid password'
            })
        }

        const token = await Jwt.sign({ _id: user._id }, process.env.Jwt_SECRET, { expiresIn: "7d" })

        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    } catch (e) {
        console.log(e)
        res.status(500).send({
            success: false,
            message: "error in login",
            error
        })
    }
};

export const testController = async (req, res) => {
    res.send('Protected routed');
}