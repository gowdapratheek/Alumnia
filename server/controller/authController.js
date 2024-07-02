const user = require("../db/models/user");

const signup = async (req, res, next) => {
  const body = req.body;

  if (!["1", "2"].includes(body.userType)) {
    return res.status(400).json({
      message: "Invalid",
    });
  }

  const newUser = await user.create({
    userType: body.userType,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    password: body.password,
  });

  if (!newUser) {
    return res.status(400).json({
      message: "Invalid",
    });
  }

  return res.status(201).json({
    status: "success",
    data: newUser,
  });
};

const login = async (req, res, next) => {
  const { usermail, password } = req.body;
  const data = {
    usermail: usermail,
    password: password,
  };
  console.log("Data received from frontend:", data);
  res.json({ success: true, message: "Logins successful" });
};

module.exports = { signup, login };
