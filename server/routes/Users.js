import { Router } from "express";
const router = Router();
import user from "../models/user.js";

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  user.create({
    username: username,
    password: password,
  });
  res.json("SUCCESS");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await user.findOne({ where: { username: username } });

  if (!user) {
    return res.json({ success: false, error: "User Doesn't Exist" });
  }

  if (password !== user.password) {
    return res.json({ success: false, error: "Wrong Username And Password Combination" });
  }

  res.json({ success: true, message: "Login successful" });
});



export default router;
