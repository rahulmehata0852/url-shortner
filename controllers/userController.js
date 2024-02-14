const expressAsyncHandler = require("express-async-handler");
const validator = require("validator")
const { nanoid } = require("nanoid");
const Url = require("../middlewares/Url");


exports.addUrl = expressAsyncHandler(async (req, res) => {
    const { shortUrl, longUrl, label } = req.body
    if (!longUrl || !label) {
        return res.status(400).json({ message: "Please provide short Url and Long Url and url" })
    }


    if (shortUrl) {
        const result = await Url.findOne({ shortUrl })
        if (result) {
            return res.status(400).json({ message: "plz choose another short url" })

        }
    } else {
        req.body.shortUrl = nanoid(6)
    }

    await Url.create(req.body)
    res.status(201).json({ message: "Url create success" })

})






exports.getUserUrl = expressAsyncHandler(async (req, res) => {

    const result = await Url.find({ userId: req.body.userId })
    res.status(200).json({ message: "url fetch success", result })
})


exports.DeleteUserUrl = expressAsyncHandler(async (req, res) => {
    const { urlId } = req.params
    await Url.findByIdAndDelete(urlId)
    res.status(200).json({ message: "url delete success" })
})


exports.UpdateUserUrl = expressAsyncHandler(async (req, res) => {
    const { urlId } = req.params
    await Url.findByIdAndUpdate(urlId, req.body, { runValidators: true })
    res.status(200).json({ message: "url update success" })
})





