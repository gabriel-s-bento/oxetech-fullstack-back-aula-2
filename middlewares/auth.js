const { verifyToken } = require("../utils/jwt");

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não informado.",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verifyToken(token);

    req.userId = decoded.id;

    next();
  } catch {
    return res.status(401).json({
      message: "Token inválido.",
    });
  }
}

module.exports = auth;
