import express from "express";
import router from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
const port = 8080;

app.use('/products' , router)

app.listen(port , () => {
    console.log(`Server is running at port ${port}`);
})