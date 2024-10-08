import mongoose from "mongoose";

const {DATABASE,DATABASE_PASSWORD} = process.env
const uri=DATABASE.replace('<db_password>',DATABASE_PASSWORD)
mongoose
  .connect(uri)
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(e);
  });