const notFound = (req, res, next) => {
  const error = new Error(`404 - ${req.originalUrl} is not found!`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let { message, stack } = err;

  res.status(statusCode).json({
    message,
    stack: process.env.MODE === "development" ? stack : undefined,
  });
};

module.exports = { errorHandler, notFound };
