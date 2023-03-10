// import model/schema to initiate actions
const Appt = require("../models/appt")

const createAppt = async (req, res) => {
  console.log(req.body)
  // const appt = await Appt.create(req.body)
  res.status(200).json({ appt: req.body })
}

module.exports = {
  createAppt
}
