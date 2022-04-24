import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("User", appointmentSchema);

export default Appointment;
