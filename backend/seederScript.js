import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/usersData.js";
import doctors from "./data/doctorData.js";
import patients from "./data/patientData.js";
//Models
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import Doctor from "./models/doctorModel.js";
import Patient from "./models/patientModel.js";
import Appointment from "./models/appointmentModel.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Doctor.deleteMany();
    await Patient.deleteMany();
    await Appointment.deleteMany();

    await User.insertMany(users);
    await Doctor.insertMany(doctors);
    await Patient.insertMany(patients);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Doctor.deleteMany();
    await Patient.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
