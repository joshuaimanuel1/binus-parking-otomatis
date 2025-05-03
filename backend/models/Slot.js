const { DataTypes } = require("sequelize");
const db = require("../config/db");

// Model untuk slot parkir
const Slot = db.define("Slot", {
  slot_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_occupied: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Slot;
