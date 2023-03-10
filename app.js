require("dotenv").config()
//async errors
require("express-async-errors")

const express = require("express")
const app = express()

const connectDB = require("./db/connect")

const port = process.env.PORT || 4000

const start = async () => {
  try {
    //connect DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
