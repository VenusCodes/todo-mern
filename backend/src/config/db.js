const mongoose = require("mongoose");
const { ENV_MONGO_URI } = require("../constants/environment");

const connectDB = async () => {
  try {
    await mongoose.connect(ENV_MONGO_URI);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
