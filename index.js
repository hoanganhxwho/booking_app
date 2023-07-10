import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/v1/auth.js";
import hotelsRoute from "./routes/v1/hotels.js";
import roomsRoute from "./routes/v1/rooms.js";
import usersRoute from "./routes/v1/users.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/hotels", hotelsRoute);
app.use("/api/v1/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

//Connect to mongo db
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
