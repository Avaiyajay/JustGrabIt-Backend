export const creatUserController = (req, res) => {
  try {
    console.log(req.body);
    res.send("Record Created Successfully");
  } catch (error) {}
};
