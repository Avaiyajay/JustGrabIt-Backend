const posts = [
  {
    title: "Fist post",
  },
  {
    title: "Second post",
  },
  {
    title: "Third post",
  },
];

export const getPosts = (req, res) => {
  res.status(200).json(posts);
};
