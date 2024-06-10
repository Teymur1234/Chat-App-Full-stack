import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoute from "./routes/messages.routes.js";
import userRoute from "./routes/user.routes.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL 


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoute)
app.use("/api/users",userRoute)

mongoose.connect(MONGODB_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.log(error.message);
});