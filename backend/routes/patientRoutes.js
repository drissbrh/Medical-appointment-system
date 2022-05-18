import express from "express";
const patientRouter = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import {
  authPatient,
  getPatientById,
} from "../controllers/patientController.js";

patientRouter.route("/login").post(authPatient);
patientRouter.route("/:id").get(protect, getPatientById);

export default patientRouter;
