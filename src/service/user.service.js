import bcrypt from "bcrypt";
import User from "../models/User.js";

const register = async (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = {
    username,
    password: hashedPassword,
  };

  try {
    const user = await User.create(newUser);
    res.status(201).json({
      message: `User registered successfully -> ${user.username}`,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default { register };
