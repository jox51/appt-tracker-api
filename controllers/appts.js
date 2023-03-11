// import model/schema to initiate actions
const Appt = require("../models/appt")

const createAppt = async (req, res) => {
  const {
    title,
    startDate,
    endDate,
    locationField: location
  } = req.body.data.appts
  console.log(req.body.data.appts)
  console.log(title, location)
  const appt = await Appt.create({ title, startDate, endDate, location })
  console.log("appt :", appt)
  res.send("success")
}

module.exports = {
  createAppt
}
