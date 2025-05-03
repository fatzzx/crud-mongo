const getProtectedMessage = async (userId) => {
  return {
    message: "Access granted: valid token",
    userId,
  };
};

export default { getProtectedMessage };
