const customMiddleware = (req, res, next) => {
    res.locals.usuario = 'gabriel'
    next();
  };

  module.exports = customMiddleware;