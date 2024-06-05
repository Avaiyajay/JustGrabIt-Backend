export const createProductController = (req, res) => {
  try {
    console.log(req.body);
    res.send("Record Created Successfully");
  } catch (error) {}
};
