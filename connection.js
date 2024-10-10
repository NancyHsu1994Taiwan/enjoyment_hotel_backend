import mongoose from "mongoose";
import dotenv from "dotenv";  // Import dotenv

dotenv.config();  

const {DATABASE,DATABASE_PASSWORD} = process.env
const uri=DATABASE.replace('<db_password>',DATABASE_PASSWORD)

mongoose
  .connect(uri)
  .then(() => {
    console.log("[mongoDB connection ok]");
  })
  .catch((e) => {
    console.log("[mongoDB connection filaed]");
  });