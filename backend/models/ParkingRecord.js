const { DataTypes } = require("sequelize");
const db = require("../config/db");

// Model untuk mencatat riwayat parkir
const ParkingRecord = db.define("ParkingRecord", {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slot_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time_in: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = ParkingRecord;
