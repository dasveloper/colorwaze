const errorHandler = (err, req, res) => {
  console.log(err);
  const code = (err.statusCode && err.expose) ? err.statusCode : 500;
  const message = (err.message && err.expose) ? err.message : 'Something went wrong';
  return res.status(code).send({ message });
};

export default errorHandler;
