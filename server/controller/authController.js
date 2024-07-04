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
    const result = await user.findOne({ where: { email: usermail } });
    console.log(usermail, password);
    console.log(result);

    if (!result) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }
    console.log(usermail, password);

    // console.log(result.password);
    // console.log(password);
    // // If the password does not match, return a 401 error
    // if (password !== result.password) {
    //   return res.status(401).json({
    //     status: "fail",
    //     message: "Invalid email or password",
    //   });
    // }
    // console.log(usermail, password);

    // console.log(result);

    console.log("Data received from frontend:", usermail, password);
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred during login. Please try again later.",
    });
  }
};
module.exports = { signup, login };
