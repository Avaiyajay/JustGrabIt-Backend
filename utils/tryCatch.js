const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
    return next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default tryCatch;
