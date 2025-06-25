import User from "./models/User.js"
import { config } from "dotenv";
import bcrypt from "bcrypt";
import connectToDatabase from "./db/connection.js";

config();

const userRegister = async () => {
  connectToDatabase();
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin"
    })
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();
