import userService from "../service/user.service.js";

const register = async (req, res) => {
  return userService.register(req, res);
};

const login = async (req, res) => {
  return userService.login(req, res);
};

export default { register, login };
