import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Please define MONGODB_URI in .env");
  }

  try {
    await mongoose.connect(uri);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
