export const checkAuthenticatedUser = (req, res, next) => {
  console.log(req.body);
  const status = req.body.isAuthenticated;
  if (status) {
    return next();
  }
  return res
    .status(403)
    .json({ msg: "You are not authorised to use this resource" });
};
