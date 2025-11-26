const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection =  await mongoose.connect(process.env.MONGO_URL);
    console.log('mongoDB connected');
    
  } catch (error) {
    console.log("mongoDB connection error",error);
    process.exit(1);
    
  }
};

module.exports = connectDB ;


/*const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    process.exit(1);
  }
};

module.exports = connectDB; */
