const { getUserUrl, addUrl, UpdateUserUrl, DeleteUserUrl } = require("../controllers/userController")

const router = require("express").Router()


router
    .get("/url", getUserUrl)
    .post("/url-create", addUrl)
    .put("/url-update/:urlId", UpdateUserUrl)
    .delete("/url-delete/:urlId", DeleteUserUrl)









module.exports = router