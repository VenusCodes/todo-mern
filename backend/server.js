const env = require("dotenv");
env.config();

const app = require("./src/app");
const {connectDB} = require("./src/config/db");
const { ENV_PORT } = require("./src/constants/environment");

connectDB();

const PORT = ENV_PORT || 4000;

app.listen(PORT, () => {
  console.log("Server started on PORT :: ", PORT);
});
