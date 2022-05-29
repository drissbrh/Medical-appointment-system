import mongoose from "mongoose";
const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Patient",
    },
    doctor: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },

    bookingDate: {
      type: Date,
      required: true,
    },
    startingHour: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
