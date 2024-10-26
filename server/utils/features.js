import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "chatio" })
    .then((data) => {
      console.log(`Connected to MongoDB database: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

export {connectDB};
