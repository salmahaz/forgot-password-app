"use server";

import { connectDB } from "@/utils/dbConnection";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function resetPassword(token: string, newPassword: string) {
  if (!token || !newPassword) {
    return { error: "Missing token or password" };
  }

  await connectDB();

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: new Date() },
  });

  if (!user) {
    return { error: "Invalid or expired token" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = hashedPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  return { message: "Password reset successful" };
}
