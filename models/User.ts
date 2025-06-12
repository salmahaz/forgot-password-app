import mongoose, { Schema, model, models } from 'mongoose';

interface IUser {
  email: string;
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date },
});

const User = models.User || model<IUser>('User', userSchema);

export default User;
