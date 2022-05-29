import express from "express";
const patientRouter = express.Router();
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  authPatient,
  getAllPatients,
  getPatientById,
  registerPatient,
} from "../controllers/patientController.js";

patientRouter.route("/login").post(authPatient);
patientRouter.route("/:id").get(protect, getPatientById);
patientRouter
  .route("/")
  .get(protect, admin, getAllPatients)
  .post(registerPatient);

export default patientRouter;
