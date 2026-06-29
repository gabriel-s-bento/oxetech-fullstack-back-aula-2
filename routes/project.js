const router = require("express").Router();
const auth = require("../middlewares/auth");
const controller = require("../controllers/project");

router.post("/", auth, controller.create);

module.exports = router;
