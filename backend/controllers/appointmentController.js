import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addAppointment = asyncHandler(async (req, res) => {
  const { startingHour, bookingDate, patient, doctor } = req.body;
  const appointmentExists = await Appointment.findOne({
    bookingDate: req.body.bookingDate,
    startingHour: req.body.startingHour,
  });
  if (appointmentExists) {
    res.status(301);
    throw new Error("appointment already taken");
    return;
  } else {
    const appointment = new Appointment({
      patient,
      doctor,
      startingHour,
      bookingDate,
    });

    const createdAppointment = await appointment.save();

    res.status(201).json(createdAppointment);
  }
});

// @desc    Get Appointment by ID
// @route   GET /api/v1/appts/:id
// @access  Private
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// @desc    Update appointment to paid
// @route   GET /api/appointments/:id/pay
// @access  Private
const updateAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment.bookingDate = req.body.bookingDate;
    appointment.startingHour = req.body.startingHour;

    const updatedAppointment = await appointment.save();

    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});

// @desc    Get logged in Patient Appointments
// @route   GET /api/v1/appts/myappts
// @access  Private
const getMyApptsAsPatient = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ patient: req.params.patient });
  res.json(appointments);
});

// @desc    Get logged in Patient Appointments
// @route   GET /api/v1/appts/myappts
// @access  Private
const getMyApptsAsDoctor = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ doctor: req.params.doctor });
  res.json(appointments);
});

// @desc    Get All appointments
// @route   GET /api/v1/appointments
// @access  Private/Admin
const getAllAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({});

  if (appointments) {
    res.json(appointments);
  } else {
    res.status(404);
    throw new Error("Patient not found");
  }
});
export {
  addAppointment,
  updateAppointment,
  getAppointmentById,
  getMyApptsAsPatient,
  getMyApptsAsDoctor,
  getAllAppointments,
};
