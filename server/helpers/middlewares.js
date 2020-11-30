function mustBeFilled(req, res, next) {
  const eventTitle = req.params.title;
  if (eventTitle === "") {
    res.status(400).json({ message: "Event title must be filled" });
  } else {
    next();
  }
}

module.exports = {
  mustBeFilled,
};
