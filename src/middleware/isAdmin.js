const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso permitido apenas para administradores." });
  }
  next();
};

export default isAdmin;
