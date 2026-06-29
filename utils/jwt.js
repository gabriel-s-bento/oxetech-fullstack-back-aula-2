const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "devhub-secret";

function generateToken(payload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: "1d",
  });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = {
  generateToken,
  verifyToken,
};
