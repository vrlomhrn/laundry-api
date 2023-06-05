const { DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

const Laundry = sequelize.define("Laundry", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  machine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = Laundry
