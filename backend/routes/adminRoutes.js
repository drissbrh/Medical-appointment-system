import express from "express";
const adminRouter = express.Router();
import { authAdmin, registerAdmin } from "../controllers/adminController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

adminRouter.route("/").post(registerAdmin); /*.get(protect, getUsers);*/
adminRouter.route("/login").post(authAdmin);
/*adminRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
adminRouter
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);*/

export default adminRouter;
