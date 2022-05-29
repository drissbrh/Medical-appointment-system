import express from "express";
const appointmentRouter = express.Router();
import { admin, patient, protect } from "../middleware/authMiddleware.js";
import {
  addAppointment,
  getAppointmentById,
  getMyApptsAsDoctor,
  getMyApptsAsPatient,
  updateAppointment,
  getAllAppointments,
} from "../controllers/appointmentController.js";

appointmentRouter
  .route("/")
  .post(addAppointment)
  .get(protect, admin, getAllAppointments);
appointmentRouter.route("/update/:id").put(updateAppointment);
appointmentRouter.route("/:id").get(protect, getAppointmentById);

//as patient
appointmentRouter
  .route("/mypatient/:patient")
  .get(protect, getMyApptsAsPatient);

//as Doctor
appointmentRouter.route("/mydoctor/:doctor").get(getMyApptsAsDoctor);

export default appointmentRouter;
