const express = require("express")
const userController = require("../controllers/userController")
const laundryController = require("../controllers/laundryController")
const authMiddleware = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/v2/signup", userController.signup)
router.post("/login", userController.login)

router.post("/laundries", authMiddleware, laundryController.createLaundry)
router.get("/laundries", authMiddleware, laundryController.getLaundries)

module.exports = router
