import { connect, disconnect } from "mongoose";
async function connectToDb() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot connect to MongoDB");
    }
}
async function disconnectFromDb() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot disconnect from MongoDB");
    }
}
export { connectToDb, disconnectFromDb };
//# sourceMappingURL=connection.js.map