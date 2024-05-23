import User from "../models/User.js";
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
//# sourceMappingURL=user-controllers.js.map