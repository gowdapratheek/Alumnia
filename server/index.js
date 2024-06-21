const express = require("express");
const authRouter = require("./routes/authRoute");
const app = express();
const port = 3000;

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "route not found",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
