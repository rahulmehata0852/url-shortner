const { register, login, logOut } = require("../controllers/authController")

const router = require("express").Router()


router
    .post("/register", register)
    .post("/login", login)
    .post("/logOut", logOut)



module.exports = router
