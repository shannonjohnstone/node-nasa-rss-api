function routeNotFound(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err); // pass error onto error handler
}

module.exports = {
  routeNotFound,
};