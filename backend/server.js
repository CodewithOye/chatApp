import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
import { Server } from "socket.io";


const PORT = process.env.PORT || 5000;



dotenv.config();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser()) // Middleware for working with cookies
// Connect to MongoDB database
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/",(req,res) => {
    // root route Http://localhost:5000/
//     res.send('Hello World!');
// });



server.listen(PORT,() => {
    connectToMongoDb();
    console.log(`Server running on port ${PORT}`);
})