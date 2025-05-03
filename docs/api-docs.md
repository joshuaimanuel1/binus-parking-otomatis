# 📘 API Documentation - Sistem Parkir Otomatis BINUS

Dokumentasi ini menjelaskan endpoint-endpoint REST API yang digunakan dalam sistem parkir otomatis, termasuk untuk mengelola pengguna, slot parkir, dan catatan parkir (masuk dan keluar).

---

## 🔐 Authentication

Saat ini tidak digunakan. Endpoint dapat diakses tanpa autentikasi.

---

## 🚗 Parking Records API

{
"rfid": "1234567890"
}

{
"message": "Kendaraan berhasil masuk",
"slot": "1B-03"
}

{
"rfid": "1234567890"
}

{
"message": "Kendaraan keluar dari slot 1B-03"
}

### 🔹 GET /api/parking

**Deskripsi**: Mendapatkan seluruh catatan parkir (masuk & keluar)

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

{
"error": "Deskripsi kesalahan"
}

**Response:**

```json
[
  {
    "id": 1,
    "rfid": "1234567890",
    "slot": "1B-01",
    "entry_time": "2025-05-03T08:30:00.000Z",
    "exit_time": "2025-05-03T10:30:00.000Z"
  }
]
```
