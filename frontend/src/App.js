import React, { useState, useEffect } from "react";
import axios from "axios";
import KeluarParkir from "./components/KeluarParkir";
import "./App.css";

function App() {
  const [rfid, setRfid] = useState("");
  const [assignedSlot, setAssignedSlot] = useState("");
  const [slots, setSlots] = useState([]);

  const handleInputChange = (e) => {
    setRfid(e.target.value);
  };

  const handleGetSlot = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/parking", {
        rfid,
      });
      setAssignedSlot(response.data.slot);
      fetchSlots(); // Refresh slot data
    } catch (error) {
      console.error(
        "Error assigning slot:",
        error.response?.data || error.message
      );
      alert("Gagal mendapatkan slot parkir. Periksa RFID atau sistem.");
    }
  };

  const fetchSlots = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/all-slots");
      setSlots(response.data);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Sistem Parkir Otomatis BINUS</h1>

        <div>
          <input
            type="text"
            className="rfid-input"
            placeholder="Tap Kartu RFID Masuk"
            value={rfid}
            onChange={handleInputChange}
          />
          <button className="get-slot-btn" onClick={handleGetSlot}>
            Dapatkan Slot Parkir
          </button>
        </div>

        {assignedSlot && (
          <div className="slot">
            Slot Parkir Anda: <strong>{assignedSlot}</strong>
          </div>
        )}

        <div className="available-slots">
          <h2>Status Slot Parkir</h2>
          <div className="slot-grid">
            {slots.map((slot) => (
              <div
                key={slot.slot_code}
                className={`slot-box ${
                  slot.is_occupied ? "occupied" : "available"
                }`}
              >
                <p>
                  <strong>{slot.slot_code}</strong>
                </p>
                <p>Status: {slot.is_occupied ? "Terisi" : "Kosong"}</p>
              </div>
            ))}
          </div>
        </div>

        <KeluarParkir
          onKeluar={() => {
            setAssignedSlot("");
            fetchSlots(); // Refresh after keluar
          }}
        />
      </div>
    </div>
  );
}

export default App;
