const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRoute"); // Adjust the path if necessary
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.use("/sam", (req, res) => {
  res.status(404).json({
    message: "Sample",
  });
});
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
