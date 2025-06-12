import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    console.log("🟢 Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🟡 Creating new MongoDB connection...");
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected:", mongoose.connection.readyState);
  return cached.conn;
}
