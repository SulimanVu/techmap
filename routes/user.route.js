const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();

router.get("/user", userController.getAllUser);
router.post("/user/signIn", userController.signIn);
router.post("/user/signUp", userController.signUp);

module.exports = router;
