import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import connectDB from "./config/db.js";
import path from "path";

//Routers
import doctorRouter from "./routes/doctorRoutes.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import patientRouter from "./routes/patientRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config({});
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/admin/", adminRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/appts/", appointmentRouter);
app.use("/api/v1/patients", patientRouter);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running on PORT ${PORT}`.yellow.bold);
});
