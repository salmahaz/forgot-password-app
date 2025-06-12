"use server";

import User from "@/models/User";
import { connectDB } from "@/utils/dbConnection";
import { sendResetEmail } from "@/utils/sendEmail";
import crypto from "crypto";

export async function forgotPassword(email: string) {
  if (!email) throw new Error("Email is required");

  await connectDB();

  const user = await User.findOne({ email });

  if (!user) {
    return { error: "User not found" };
  }

  // generate reset token & expiry
  const resetToken = crypto.randomBytes(32).toString("hex");
  const resetTokenExpiry = Date.now() + 3600 * 1000; // 1 hour

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = new Date(resetTokenExpiry);

  await user.save();

  // e.g. `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`
  await sendResetEmail(email, resetToken);

  console.log("reset token for", email, resetToken);

  return { message: "Reset link has been sent to your email" };
}
