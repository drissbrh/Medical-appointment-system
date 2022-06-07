import bcrypt from "bcryptjs";

const patients = [
  {
    name: "Salima Amrani",
    email: "salima@gmail.com",
    password: bcrypt.hashSync("112233", 10),
  },
  {
    name: "Walid Samid",
    email: "walid@gmail.com",
    password: bcrypt.hashSync("112233", 10),
  },
  {
    name: "hamza 3",
    email: "hamza@gmail.com",
    password: bcrypt.hashSync("112233", 10),
  },
];

export default patients;
