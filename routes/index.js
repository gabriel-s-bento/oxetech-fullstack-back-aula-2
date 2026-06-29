const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/projetos", require("./project"));

module.exports = router;
