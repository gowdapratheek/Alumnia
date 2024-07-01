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

  try {
    console.log("Data received from frontend:", usermail, password);
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Error occurred during login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

  // if (!email || !password) {
  //   return res.status(404).json({
  //     status: false,
  //     message: "please enter valid email and password",
  //   });
  // }

  // const result = await user.findOne({ where: { email } });
  // if (!result) {
  //   return res.status(404).json({
  //     status: false,
  //     message: "Invalid email or password",
  //   });
  // }

  //  return res.status(201).json({
  //    status: true,
  //    message: "login success",
  //  });
};

module.exports = { signup, login };
