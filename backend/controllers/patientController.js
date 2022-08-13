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

// @desc    Get user profile
// @route   GET /api/v1/doctors/profile
// @access  Private
const getPatientProfile = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id);

  if (patient) {
    res.json({
      _id: patient._id,
      name: patient.name,
      email: patient.email,
      image: patient.image,
      isPatient: patient.isPatient,
    });
  } else {
    res.status(404);
    throw new Error("patient not found");
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

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updatePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id);

  if (patient) {
    patient.image = req.body.image || patient.image;
    patient.name = req.body.name || patient.name;
    patient.email = req.body.email || patient.email;
    patient.password = req.body.password || patient.password;

    const updatedPatient = await patient.save();

    res.json({
      _id: updatedPatient._id,
      name: updatedPatient.name,
      email: updatedPatient.email,
      image: updatedPatient.image,
      password: updatedPatient.password,
      isPatient: updatedPatient.isPatient,
    });
  } else {
    res.status(404);
    throw new Error("patient not found");
  }
});

// @desc    Delete patient
// @route   DELETE /api/v1/patient/:id
// @access  Private/Admin
const deletePatient = asyncHandler(async (req, res) => {
  const patient = await Patient.findById(req.params.id);

  if (patient) {
    await patient.remove();
    res.json({ message: "patient removed" });
  } else {
    res.status(404);
    throw new Error("patient not found");
  }
});
export {
  authPatient,
  registerPatient,
  getPatientById,
  getPatientProfile,
  getAllPatients,
  updatePatient,
  deletePatient,
};
