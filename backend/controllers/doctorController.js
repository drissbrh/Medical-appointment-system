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
      phoneNumber: doctor.phoneNumber,
      city: doctor.city,
      address: doctor.address,
      speciality: doctor.speciality,
      isDoctor: doctor.isDoctor,
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
  const doctor = await Doctor.findById(req.params.id);

  if (doctor) {
    res.json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      city: doctor.city,
      address: doctor.address,
      phoneNumber: doctor.phoneNumber,
      speciality: doctor.speciality,
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
    doctor.city = req.body.city || doctor.city;
    doctor.address = req.body.address || doctor.address;
    doctor.phoneNumber = req.body.phoneNumber || doctor.phoneNumber;
    doctor.isDoctor;
    if (req.body.password) {
      doctor.password = req.body.password;
    }

    const updatedDoctor = await user.save();

    res.json({
      _id: updatedDoctor._id,
      name: updatedDoctor.name,
      email: updatedDoctor.email,
      isDoctor: updatedDoctor.isDoctor,
      token: generateToken(updatedDoctor._id),
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

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);

  if (doctor) {
    doctor.name = req.body.name || doctor.name;
    doctor.email = req.body.email || doctor.email;
    doctor.password = req.body.password || doctor.password;
    doctor.city = req.body.city || doctor.city;
    doctor.address = req.body.address || doctor.address;
    doctor.phoneNumber = req.body.phoneNumber || doctor.phoneNumber;
    doctor.speciality = req.body.speciality || doctor.speciality;

    const updatedDoctor = await doctor.save();

    res.json({
      _id: updatedDoctor._id,
      name: updatedDoctor.name,
      email: updatedDoctor.email,
      password: updatedDoctor.password,
      city: updatedDoctor.city,
      address: updatedDoctor.address,
      phoneNumber: updatedDoctor.phoneNumber,
      speciality: updatedDoctor.speciality,
      isDoctor: updatedDoctor.isDoctor,
    });
  } else {
    res.status(404);
    throw new Error("patient not found");
  }
});

// @desc    Get All doctors By City
// @route   GET /api/v1/doctors/search?keyword
const getAllDoctorsByCity = asyncHandler(async (req, res) => {
  //const doctors = await Doctor.find({}).select("-password");
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        city: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Doctor.countDocuments({ ...keyword });
  const doctors = await Doctor.find({ ...keyword })
    .select("-password")
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ doctors, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Get All doctors By Speciality
// @route   GET /api/v1/doctors/search?keyword

const getAllDoctorsBySpeciality = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        speciality: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Doctor.countDocuments({ ...keyword });
  const doctors = await Doctor.find({ ...keyword })
    .select("-password")
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ doctors, page, pages: Math.ceil(count / pageSize) });
});

const getAllDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({}).select("-password");

  if (doctors) {
    res.json(doctors);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});

// @desc    Delete doctor
// @route   DELETE /api/v1/doctors/:id
// @access  Private/Admin
const deleteDoctor = asyncHandler(async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);

  if (doctor) {
    await doctor.remove();
    res.json({ message: "doctor removed" });
  } else {
    res.status(404);
    throw new Error("doctor not found");
  }
});

export {
  authDoctor,
  registerDoctor,
  updateDoctorProfile,
  getDoctorProfile,
  getAllDoctors,
  getAllDoctorsByCity,
  getAllDoctorsBySpeciality,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
