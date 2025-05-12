import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4  // Force IPv4
        })
    } catch (error) {
        console.error("MongoDB connection error:", error)
    }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.