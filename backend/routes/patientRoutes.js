import express from "express";
const patientRouter = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  authPatient,
  getAllPatients,
  getPatientById,
  getPatientProfile,
  registerPatient,
  updatePatient,
} from "../controllers/patientController.js";

patientRouter.route("/login").post(authPatient);
patientRouter.route("/profile/:id").get(getPatientProfile);
patientRouter.route("/:id").get(protect, getPatientById).put(updatePatient);
patientRouter
  .route("/")
  .get(protect, admin, getAllPatients)
  .post(registerPatient);

export default patientRouter;
