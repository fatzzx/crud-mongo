import User from "../models/User.js";

const createUser = async (userData) => {
  return await User.create(userData);
};

const findByUsernameWithPassword = async (username) => {
  return await User.findOne({ username }).select("+password");
};

const findByUsername = async (username) => {
  return await User.findOne({ username });
};

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const findByEmailWithPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};

export default {
  createUser,
  findByEmailWithPassword,
  findByUsernameWithPassword,
  findByUsername,
  findByEmail,
};
