import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("112233", 10),
    isAdmin: true,
  },
  {
    name: "doctor User",
    email: "doctor@gmail.com",
    password: bcrypt.hashSync("112233", 10),
  },
  {
    name: "patient User",
    email: "patient@example.com",
    password: bcrypt.hashSync("112233", 10),
  },
];

export default users;
