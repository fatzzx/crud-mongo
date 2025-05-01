import userService from "../service/user.service.js";

const register = async (req, res) => {
  return userService.register(req, res);
};
export default { register };
