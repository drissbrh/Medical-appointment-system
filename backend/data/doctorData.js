import bcrypt from "bcryptjs";

const doctors = [
  {
    name: "Achraf Doc 1",
    email: "َachraf@gmail.com",
    password: bcrypt.hashSync("112233", 10),
    phoneNumber: "0512120565",
    city: "Salé",
    address: "hay talberjt num 79",
    speciality: "Allergy and Immunology",
  },
  {
    name: "Mohammed Doc 2",
    email: "mohammed@gmail.com",
    password: bcrypt.hashSync("112233", 10),
    phoneNumber: "0511223636",
    city: "Marrakech",
    address: "hay talberjt num 79",
    speciality: "Cardiology",
  },
  {
    name: "Ichrak Doc 3",
    email: "ichrak@gmail.com",
    password: bcrypt.hashSync("112233", 10),
    phoneNumber: "0541430565",
    city: "agadir",
    address: "hay talberjt num 14",
    speciality: "Emergency medicine",
  },
];

export default doctors;
