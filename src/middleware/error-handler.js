function errorHandler(err, req, res, next) {
  const status = err?.status || 500;

  const error = {
    message: err?.message,
    status,
  };

  // Would only expose this level of detail if development
  // no need to expose this detail in production
  res.status(status).send({
    ...error,
    stackHighlighted: err.stack,
    // stackHighlighted: err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, "<mark>$&</mark>"),
  });
}

module.exports = {
  errorHandler,
};