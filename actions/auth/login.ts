"use server";

import User from "@/models/User";
import { connectDB } from "@/utils/dbConnection";
import bcrypt from "bcryptjs";

export async function login(email: string, password: string) {
  await connectDB();

  const user = await User.findOne({ email });

  if (!user) {
    return { error: "user not found" };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "invalid password" };
  }

  return { message: "login successful" };
}
