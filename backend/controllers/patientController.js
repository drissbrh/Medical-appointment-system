import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Patient from "../models/patientModel.js";

// @desc    Auth Doctor & get token
// @route   POST /api/v1/doctors/login
// @access  Public
const authPatient = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const patient = await Patient.findOne({ email });

  if (patient && (await patient.matchPassword(password))) {
    res.json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      isPatient: patient.isPatient,
      token: generateToken(patient._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Get user by ID
// @route   GET /api/v1/patients/:id
// @access  Private/Admin
const getPatientById = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id).select("-password");

  if (patient) {
    res.json(patient);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerPatient = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const patientExists = await Patient.findOne({ email });

  if (patientExists) {
    res.status(400);
    throw new Error("Patient already exists");
  }

  const patient = await Patient.create({
    name,
    email,
    password,
  });

  if (patient) {
    res.status(201).json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      isPatient: patient.isPatient,
      token: generateToken(patient._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid patient data");
  }
});

// @desc    Get All patients
// @route   GET /api/v1/patients
// @access  Private/Admin
const getAllPatients = asyncHandler(async (req, res) => {
  const patients = await Patient.find({}).select("-password");

  if (patients) {
    res.json(patients);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});

export { authPatient, registerPatient, getPatientById, getAllPatients };
