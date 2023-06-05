require("dotenv").config()

const express = require("express")
const config = require("./app/config/config")
const sequelize = require("./app/config/sequelize")
const routes = require("./app/router/routes")

const app = express()

const port = process.env.PORT
const baseUrl = process.env.URL + port

app.use(express.json())

app.use("/", routes)

sequelize
  .sync({ force: true }) // Hapus opsi "force: true" jika tidak ingin menghapus tabel pada setiap sinkronisasi
  .then(() => {
    console.log("Database connected")

    app.listen(port, () => {
      console.log("Server started on " + baseUrl)
    })
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error)
  })
