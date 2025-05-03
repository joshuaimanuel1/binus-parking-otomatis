const { DataTypes } = require("sequelize");
const db = require("../config/db");

// Model untuk pengguna
const User = db.define("User", {
  rfid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
