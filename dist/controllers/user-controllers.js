import User from "../models/User.js";
import { compare, hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "ok", users });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Error", cause: error.maeesage });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).send("User with this email already registered");
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        return res.status(201).json({ message: "user created", email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Error", cause: error.maeesage });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send("No user with this email registered");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).send("Incorrect password");
        }
        return res.status(200).json({ message: "Logined", email: user.email });
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Error", cause: error.maeesage });
    }
};
//# sourceMappingURL=user-controllers.js.map