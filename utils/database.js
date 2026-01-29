import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected && mongoose.connection.readyState === 1){
        console.log("MongoDB is already connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Foodzy",
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
            socketTimeoutMS: 45000,
        });
        
        isConnected = true;
        console.log("MongoDB connected successfully");
    } catch(error) {
        console.error("MongoDB connection error:", error);
        isConnected = false;
        throw error; // Re-throw to handle in API route
    }
};