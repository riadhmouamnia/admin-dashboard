import mongoose, { Connection } from "mongoose";

interface ConnectionObject {
    isConnected?: number;
  }

const connection: ConnectionObject = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    connection.isConnected = db.connections[0].readyState as number;
  } catch (error) {
    console.log(error)
    throw new Error(error as string);
  }
};