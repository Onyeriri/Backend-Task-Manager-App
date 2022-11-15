const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

module.exports = connectDB;

// const startSever = async () => {
//   try {
//     await connectDB();

//   } catch (error) {
//     console.log(error);
//   }
// };

// startSever();
