import bcrypt from "bcryptjs";

const adminUser = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("112233", 10),
    isAdmin: true,
  },
];

export default adminUser;
