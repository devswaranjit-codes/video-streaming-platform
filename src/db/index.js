// import mongoose from "mongoose";

// import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

// export default connectDB































/*
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

*/
