const express = require("express");
const cors = require("cors");
const parkingRoutes = require("./routes/parkingRoutes");
const slotRoutes = require("./routes/slotRoutes");

const app = express();
const port = 3001; // disesuaikan dengan frontend proxy

app.use(cors());
app.use(express.json());

// Gunakan route yang konsisten dengan frontend
app.use("/api/parking", parkingRoutes);
app.use("/api/all-slots", slotRoutes); // disesuaikan agar cocok dengan axios.get("/api/all-slots")

// Server aktif
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
