// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
(async () => {
  try {
    connectDB()
      .then(() => {
        app.listen(process.env.PORT || 8000, () => {
          console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
      })
      .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
      });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
