import ProtectedService from "../service/protected.service.js";

const accessProtected = async (req, res) => {
  try {
    const response = await ProtectedService.getProtectedMessage(req.userId);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error in protected route:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default { accessProtected };
