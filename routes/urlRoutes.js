const { getLongUrl } = require("../controllers/urlController")

const router = require("express").Router()




router
    .get("/:shortUrl", getLongUrl)





module.exports = router