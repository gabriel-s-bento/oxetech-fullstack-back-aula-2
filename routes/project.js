const router = require("express").Router();
const auth = require("../middlewares/auth");
const controller = require("../controllers/project");

router.post("/", auth, controller.create);
router.get("/", auth, controller.listAll);

module.exports = router;
