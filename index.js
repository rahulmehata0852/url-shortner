const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const { userProtected, adminProtected } = require("./middlewares/protected")
require("dotenv").config({ path: "./.env" })


mongoose.connect(process.env.MONGO_URL)

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
))
app.use(cookieParser())


app.use("/api/v1/auth", require("./routes/authRoute"))
app.use("/api/v1/url", require("./routes/urlRoutes"))
app.use("/api/v1/user", userProtected, require("./routes/userRoutes"))
app.use("/api/v1/admin", adminProtected, require("./routes/adminRoute"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource not found" })
})

// Error handler

app.use((err, req, res, nex) => {
    console.log(err);
    res.status(500).json({ message: err.message || "something went wrong" })
})




// server
mongoose.connection.once("open", () => {
    console.log("MOngoose connected");
    app.listen(process.env.PORT, console.log(`Server running on ${process.env.PORT}`))
})

