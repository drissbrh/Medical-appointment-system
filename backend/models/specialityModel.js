import mongoose from "mongoose";

const specialitySchema = mongoose.Schema({
  name: {
    type: String,
  },
});

const Speciality = mongoose.model("Speciality", specialitySchema);

export default Speciality;
