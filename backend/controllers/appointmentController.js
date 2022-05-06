import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addAppointment = asyncHandler(async (req, res) => {
  const { startingHour } = req.body;

  if (startingHour === 0) {
    res.status(500);
    throw new Error("No appointment made");
    return;
  } else {
    const appointment = new Appointment({
      doctor: req.doctor._id,
      startingHour,
    });

    const createdAppointment = await appointment.save();

    res.status(201).json(createdAppointment);
  }
});
export { addAppointment };
