import mongoose from "mongoose";

async function dbConnection() {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log(`Database connection successfully!`);
  } catch (err) {
    console.log(`Database connection fail! => ${err}`);
  }
}

export default dbConnection;
