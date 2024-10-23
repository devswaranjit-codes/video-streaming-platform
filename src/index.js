import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();


const dbLink =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@videostreamingapp.kjcrh.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`;
console.log(dbLink);

const connectionInstance = mongoose.connect(dbLink)
  .then(function (connection) {
    console.log("Connected to MongoDB!");
     console.log(`Connected to connectionInstance: ${connectionInstance}`);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("ERROR:", err);
    process.exit(1);
  });



  /*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/