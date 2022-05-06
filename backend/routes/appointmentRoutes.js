import express from "express";
const appointmentRouter = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import { addAppointment } from "../controllers/appointmentController.js";

appointmentRouter.route("/").post(addAppointment);

export default appointmentRouter;
