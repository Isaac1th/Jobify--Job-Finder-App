const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'an error has occured' });
};

export default errorHandlerMiddleware;
