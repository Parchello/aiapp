import User from "../models/User.js";
import { hash } from "bcrypt";
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
//# sourceMappingURL=user-controllers.js.map