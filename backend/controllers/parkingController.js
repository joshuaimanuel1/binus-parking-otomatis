// backend/controllers/parkingController.js

const db = require("../config/db");

// Fungsi: Menangani proses masuk parkir
exports.parkVehicle = (req, res) => {
  const { rfid } = req.body;

  if (!rfid) {
    return res.status(400).json({ message: "RFID diperlukan" });
  }

  const checkUserQuery = "SELECT * FROM users WHERE rfid = ?";
  db.query(checkUserQuery, [rfid], (err, users) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (users.length === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });

    const getSlotQuery =
      "SELECT * FROM parking_slots WHERE is_occupied = 0 LIMIT 1";
    db.query(getSlotQuery, (err, slots) => {
      if (err) return res.status(500).json({ message: "DB error", error: err });
      if (slots.length === 0)
        return res.status(404).json({ message: "Slot parkir penuh" });

      const slot = slots[0];

      const insertRecordQuery =
        "INSERT INTO parking_records (user_id, slot_id, time_in) VALUES (?, ?, NOW())";
      db.query(insertRecordQuery, [users[0].id, slot.id], (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Gagal menyimpan parkir", error: err });

        const updateSlotQuery =
          "UPDATE parking_slots SET is_occupied = 1 WHERE id = ?";
        db.query(updateSlotQuery, [slot.id]);

        return res.json({ message: "Parkir berhasil", slot: slot.slot_code });
      });
    });
  });
};

// Fungsi: Menangani proses keluar parkir
exports.leaveVehicle = (req, res) => {
  const { rfid } = req.body;

  if (!rfid) {
    return res.status(400).json({ message: "RFID diperlukan" });
  }

  const findUserQuery = "SELECT * FROM users WHERE rfid = ?";
  db.query(findUserQuery, [rfid], (err, users) => {
    if (err) return res.status(500).json({ message: "DB error", error: err });
    if (users.length === 0)
      return res.status(404).json({ message: "User tidak ditemukan" });

    const userId = users[0].id;

    const findRecordQuery =
      "SELECT * FROM parking_records WHERE user_id = ? AND time_out IS NULL ORDER BY time_in DESC LIMIT 1";
    db.query(findRecordQuery, [userId], (err, records) => {
      if (err) return res.status(500).json({ message: "DB error", error: err });
      if (records.length === 0)
        return res
          .status(404)
          .json({ message: "Tidak ada record parkir aktif" });

      const record = records[0];

      const updateRecordQuery =
        "UPDATE parking_records SET time_out = NOW() WHERE id = ?";
      db.query(updateRecordQuery, [record.id], (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Gagal keluar parkir", error: err });

        const updateSlotQuery =
          "UPDATE parking_slots SET is_occupied = 0 WHERE id = ?";
        db.query(updateSlotQuery, [record.slot_id]);

        return res.json({ message: "Berhasil keluar parkir" });
      });
    });
  });
};
