const Laundry = require("../models/Laundry")

async function createLaundry(req, res) {
  try {
    const { name } = req.body

    const laundry = await Laundry.create({ name })

    res.json(laundry)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

async function getLaundries(req, res) {
  try {
    const laundries = await Laundry.findAll()

    res.json(laundries)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

module.exports = { createLaundry, getLaundries }
