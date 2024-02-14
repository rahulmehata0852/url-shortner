const asyncHandler = require("express-async-handler")
const User = require("../middlewares/User")
const Url = require("../middlewares/Url")

exports.admingetAllUsers = asyncHandler(async (req, res) => {
    const result = await User.find({ role: "user" })
    res.status(200).json({ message: "All user Fetach success", result })
})

exports.adminUpdateUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    const result = await User.findByIdAndUpdate(userId, { ...req.body, role: "user" }, { runValidators: true })

    res.status(200).json({ message: "user Update success" })
})

exports.admingetUserUrls = asyncHandler(async (req, res) => {
    const { userId } = req.params
    const result = await Url.find({ userId })

    res.status(200).json({ message: "user Update success", result })
})