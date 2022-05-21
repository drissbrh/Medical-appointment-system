import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Doctor from "../models/doctorModel.js";

// @desc    Auth Doctor & get token
// @route   POST /api/v1/doctors/login
// @access  Public
const authDoctor = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const doctor = await Doctor.findOne({ email });

  if (doctor && (await doctor.matchPassword(password))) {
    res.json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      isAdmin: doctor.isAdmin,
      token: generateToken(doctor._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new Doctor
// @route   POST /api/v1/doctors
// @access  Public
const registerDoctor = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    address,
    speciality,
    city,
    isDoctor,
  } = req.body;

  const doctorExists = await Doctor.findOne({ email });

  if (doctorExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const doctor = await Doctor.create({
    name,
    email,
    password,
    phoneNumber,
    city,
    isDoctor,
    address,
    speciality,
  });

  if (doctor) {
    res.status(201).json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      isAdmin: doctor.isAdmin,
      phoneNumber: doctor.phoneNumber,
      city: doctor.city,
      isDoctor: doctor.isDoctor,
      address: doctor.address,
      speciality: doctor.speciality,

      token: generateToken(doctor._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid doctor data");
  }
});

// @desc    Get user profile
// @route   GET /api/v1/doctors/profile
// @access  Private
const getDoctorProfile = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.doctor._id);

  if (doctor) {
    res.json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      city: doctor.city,
      address: doctor.address,
      phoneNumber: doctor.phoneNumber,
      isDoctor: doctor.isDoctor,
    });
  } else {
    res.status(404);
    throw new Error("doctor not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/v1/doctor/profile
// @access  Private
const updateDoctorProfile = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.doctor._id);

  if (doctor) {
    doctor.name = req.body.name || doctor.name;
    doctor.email = req.body.email || doctor.email;
    if (req.body.password) {
      doctor.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isDoctor: updatedUser.isDoctor,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getDoctorById = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id).select("-password");

  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404);
    throw new Error("Doctor not found");
  }
});

// @desc    Update doctor
// @route   PUT /api/v1/doctors/:id
// @access  Private/Admin
const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);

  if (doctor) {
    doctor.name = req.body.name || doctor.name;
    doctor.email = req.body.email || doctor.email;
    doctor.isAdmin = req.body.isAdmin;

    const updatedDoctor = await doctor.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Get All doctors
// @route   GET /api/v1/doctors
// @access  Private/Admin
const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({}).select("-password");

  if (doctors) {
    res.json(doctors);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});

export {
  authDoctor,
  registerDoctor,
  updateDoctorProfile,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
};
