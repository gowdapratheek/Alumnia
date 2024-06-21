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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({
      status: "fail",
      message: "please enter valid email and password",
    });
  }

  const result = await user.findOne({ where: { email } });
  if (!result) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid email or password",
    });
  }

//   if (password !== user.password) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid email or password",
//     });
//   }

   return res.status(201).json({
     status: "success",
     message: "login success",
   });
};

module.exports = { signup,login };
