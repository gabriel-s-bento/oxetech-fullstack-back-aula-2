const authService = require("../services/auth");

async function register(req, res) {
  try {
    const developer = await authService.register(req.body);

    res.status(201).json(developer);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const token = await authService.login(req.body);

    res.json({ token });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
}

module.exports = {
  register,
  login,
};
