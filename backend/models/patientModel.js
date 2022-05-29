import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isPatient: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);
/*
appointment: [
      {
        type: Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
     */
patientSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

patientSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
