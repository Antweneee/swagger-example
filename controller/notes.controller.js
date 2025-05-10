exports.getNotes = (req, res) => {
  res.json([{ id: 1, content: "Hello friend!" }]);
};

exports.createNote = (req, res) => {
  const { content } = req.body;
  res.status(201).json({ id: 2, content });
};
