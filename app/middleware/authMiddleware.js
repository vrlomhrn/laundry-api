const jwt = require("jsonwebtoken")
const config = require("../config/config")

function authMiddleware(req, res, next) {
  const token = req.header("Authorization")

  if (!token) {
    return res.status(401).json({ message: "Access denied" })
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret)
    req.userId = decoded.userId
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ message: "Invalid token" })
  }
}

module.exports = authMiddleware
