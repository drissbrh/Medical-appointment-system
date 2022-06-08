import express from "express";
const doctorRouter = express.Router();
import {
  authDoctor,
  registerDoctor,
  getDoctorProfile,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  getAllDoctorsByCity,
  getAllDoctorsBySpeciality,
  getAllDoctorsByCitySpec,
  deleteDoctor,
} from "../controllers/doctorController.js";
import {
  protect,
  admin,
  doctorMiddleware,
} from "../middleware/authMiddleware.js";

doctorRouter.route("/").post(registerDoctor).get(getAllDoctors);

doctorRouter.route("/search/city").get(getAllDoctorsByCity);
doctorRouter.route("/search/spec").get(getAllDoctorsBySpeciality);
doctorRouter.route("/search/both").get(getAllDoctorsByCitySpec);
doctorRouter.post("/login", authDoctor);
doctorRouter.get("/profile/:id", getDoctorProfile);

doctorRouter
  .route("/:id")
  .get(protect, getDoctorById)
  .get(getDoctorProfile)
  .put(protect, updateDoctor)
  .delete(protect, deleteDoctor);

export default doctorRouter;
