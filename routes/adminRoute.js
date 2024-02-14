const { admingetAllUsers, adminUpdateUser, admingetUserUrls } = require("../controllers/adminController")

const router = require("express").Router()



router
    .get("/user", admingetAllUsers)
    .put("/user/:userId", adminUpdateUser)
    .get("/user/url/:userId", admingetUserUrls)







module.exports = router



