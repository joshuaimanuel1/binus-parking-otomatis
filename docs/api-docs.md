# 📘 API Documentation - Sistem Parkir Otomatis BINUS

Dokumentasi ini menjelaskan endpoint-endpoint REST API yang digunakan dalam sistem parkir otomatis, termasuk untuk mengelola pengguna, slot parkir, dan catatan parkir masuk/keluar.

---

## 🌐 Base URL

http://localhost:5000/api

---

## 🔐 Authentication

Saat ini tidak digunakan. Semua endpoint dapat diakses tanpa autentikasi.

---

## 🚗 Parking Records API

### 📥 POST `/api/parking`

**Deskripsi:**  
Mendaftarkan kendaraan masuk berdasarkan RFID dan otomatis memilih slot parkir yang kosong.

**Request Body:**

```json
{
  "rfid": "1234567890"
}

Response:
{
  "message": "Kendaraan berhasil masuk",
  "slot": "1B-03"
}

---

📤 POST /api/keluar
Deskripsi:
Mendaftarkan kendaraan keluar berdasarkan RFID dan memperbarui waktu keluar serta status slot.

Request Body:
{
  "rfid": "1234567890"
}

Response:
{
  "message": "Kendaraan keluar dari slot 1B-03"
}
```

📋 GET /api/parking
Deskripsi:
Mengambil seluruh catatan parkir masuk dan keluar kendaraan.

Response:

[
{
"id": 1,
"rfid": "1234567890",
"slot": "1B-01",
"entry_time": "2025-05-03T08:30:00.000Z",
"exit_time": "2025-05-03T10:30:00.000Z"
}
]

🅿️ Slot Management API
📋 GET /api/all-slots
Deskripsi:
Mengambil seluruh daftar slot parkir dan statusnya (terisi atau tidak).

Response:
[
{
"slot_id": "1B-01",
"is_occupied": true
},
{
"slot_id": "1B-02",
"is_occupied": false
}
]

🔄 POST /api/update-slot
Deskripsi:
Memperbarui status slot parkir berdasarkan ID.

Request Body:
{
"id": 1,
"isOccupied": true
}

Response:
{
"message": "Status slot diperbarui"
}

⚙️ Error Format
Jika terjadi kesalahan, API akan merespons dalam format berikut:

{
"error": "Deskripsi kesalahan"
}
