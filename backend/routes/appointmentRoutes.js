import express from "express";
const appointmentRouter = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  addAppointment,
  getAppointmentById,
} from "../controllers/appointmentController.js";

appointmentRouter.route("/").post(addAppointment);
appointmentRouter.route("/:id").get(protect, getAppointmentById);

export default appointmentRouter;
