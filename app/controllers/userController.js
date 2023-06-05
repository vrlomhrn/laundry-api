const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const config = require("../config/config")

async function signup(req, res) {
  try {
    const { username, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hashedPassword })

    const token = jwt.sign({ userId: user.id }, config.secret)

    res.json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ where: { username } })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ userId: user.id }, config.secret)

    res.json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
}

module.exports = { signup, login }
