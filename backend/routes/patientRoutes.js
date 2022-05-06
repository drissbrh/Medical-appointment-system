import express from "express";
const patientRouter = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import { authPatient } from "../controllers/patientController.js";

patientRouter.route("/login").post(authPatient);

export default patientRouter;
