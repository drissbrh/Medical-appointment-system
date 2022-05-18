import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addAppointment = asyncHandler(async (req, res) => {
  const { startingHour, bookingDate, patient, doctor } = req.body;

  if (startingHour === 0) {
    res.status(301);
    throw new Error("No appointment made");
    //return;
  } else {
    const appointment = new Appointment({
      patient,
      startingHour,
      doctor,
      bookingDate,
    });

    const createdAppointment = await appointment.save();

    res.status(201).json(createdAppointment);
  }
});

// @desc    Get Appointment by ID
// @route   GET /api/v1/appointments/:id
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
const updateAppointmentToPaid = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedappointment = await appointment.save();

    res.json(updatedappointment);
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});

// @desc    Get logged in user Appointments
// @route   GET /api/Appointments/myappointments
// @access  Private
const getMyAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({ user: req.user._id });
  res.json(appointments);
});

export { addAppointment, getAppointmentById, getMyAppointments };
