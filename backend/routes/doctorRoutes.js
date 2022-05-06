import express from "express";
const doctorRouter = express.Router();
import {
  authDoctor,
  registerDoctor,
  getDoctorProfile,
  updateDoctorProfile,
  getDoctors,
  deleteDoctor,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctorController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

doctorRouter.route("/").post(registerDoctor).get(protect, getDoctors);
doctorRouter.post("/login", authDoctor);
doctorRouter
  .route("/profile")
  .get(protect, getDoctorProfile)
  .put(protect, updateDoctorProfile);
doctorRouter
  .route("/:id")
  .delete(protect, admin, deleteDoctor)
  .get(protect, getDoctorById)
  .put(protect, admin, updateDoctor);

export default doctorRouter;
