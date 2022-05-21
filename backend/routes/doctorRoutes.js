import express from "express";
const doctorRouter = express.Router();
import {
  authDoctor,
  registerDoctor,
  updateDoctorProfile,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from "../controllers/doctorController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

doctorRouter.route("/").post(registerDoctor).get(getAllDoctors);
doctorRouter.post("/login", authDoctor);
doctorRouter
  .route("/profile")

  .put(protect, updateDoctorProfile);
doctorRouter
  .route("/:id")
  .get(protect, getDoctorById)
  .put(protect, admin, updateDoctor);

export default doctorRouter;
