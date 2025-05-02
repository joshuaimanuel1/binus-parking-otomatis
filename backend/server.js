const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "binus_parking",
});

// Test koneksi database
db.connect((err) => {
  if (err) {
    console.error("❌ Koneksi database gagal:", err);
  } else {
    console.log("✅ Koneksi database berhasil!");
  }
});

// Rute untuk alokasi slot parkir
app.post("/api/parking", (req, res) => {
  const { rfid } = req.body;

  db.query(
    "SELECT * FROM parking_slots WHERE is_occupied = 0 ORDER BY location ASC LIMIT 1",
    (err, results) => {
      if (err) {
        console.error("❌ Error mengambil slot:", err);
        return res.status(500).json({ message: "Error server" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Semua slot penuh" });
      }

      const slot = results[0];

      db.query(
        "UPDATE parking_slots SET is_occupied = 1 WHERE id = ?",
        [slot.id],
        (updateErr) => {
          if (updateErr) {
            console.error("❌ Gagal update slot:", updateErr);
            return res.status(500).json({ message: "Error server" });
          }

          db.query(
            "INSERT INTO parking_records (user_id, slot_id, time_in) VALUES (?, ?, NOW())",
            [rfid, slot.id],
            (logErr) => {
              if (logErr) {
                console.error("❌ Gagal simpan log:", logErr);
                return res.status(500).json({ message: "Gagal simpan log" });
              }

              res.json({ rfid, slot: slot.slot_code });
            }
          );
        }
      );
    }
  );
});

// Server berjalan di port 5000
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
