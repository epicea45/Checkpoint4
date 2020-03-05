const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (typeof bearer !== 'undefined') {
    // eslint-disable-next-line prefer-destructuring
    req.token = bearer.split(' ')[1];
    next();
  } else {
    res.status(403).send({ message: "Vous n'avez pas les accès à cette zone" });
  }
};

exports.verifyAdmin = (req, res, next) => {
  jwt.verify(req.token, process.env.SECRET_KEY, err => {
    if (err) {
      return res
        .status('401')
        .send({ message: "Vous n'avez pas le droit de venir ici" });
    }
    return next();
  });
};
