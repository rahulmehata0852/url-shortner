const expressAsyncHandler = require("express-async-handler");
const Url = require("../middlewares/Url");

exports.getLongUrl = expressAsyncHandler(async (req, res) => {

    const { shortUrl } = req.params
    const result = await Url.findOne({ shortUrl })
    if (!result) {
        return res.status(400).json({ message: "invalid Code" })
    }
    await Url.findByIdAndUpdate(result._id, { count: result.count + 1 })

    res.status(200).json({ message: "url fetch Success", result: result.longUrl })

})