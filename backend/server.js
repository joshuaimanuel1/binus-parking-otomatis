const express = require("express");
const cors = require("cors");
const parkingRoutes = require("./routes/parkingRoutes");
const slotRoutes = require("./routes/slotRoutes");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/parking", parkingRoutes);
app.use("/api/slot", slotRoutes);

// Run server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
