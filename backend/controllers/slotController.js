const db = require("../config/db");

const getAllSlots = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM parking_slots");
    res.json(rows);
  } catch (err) {
    console.error("Gagal mengambil slot:", err);
    res.status(500).json({ error: "Gagal mengambil slot parkir" });
  }
};

const updateSlotStatus = async (req, res) => {
  const { id, isOccupied } = req.body;

  try {
    await db.query("UPDATE parking_slots SET is_occupied = ? WHERE id = ?", [
      isOccupied,
      id,
    ]);
    res.json({ message: "Status slot diperbarui" });
  } catch (err) {
    console.error("Gagal mengubah status slot:", err);
    res.status(500).json({ error: "Gagal mengubah status slot parkir" });
  }
};

module.exports = {
  getAllSlots,
  updateSlotStatus,
};
