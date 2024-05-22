import app from "./app.js";
import { connectToDb } from "./db/connection.js";
connectToDb()
    .then(() => {
    app.listen(5000, () => {
        console.log("Server started and connected to DB");
    });
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map