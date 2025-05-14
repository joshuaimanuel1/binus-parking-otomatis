```md
# 📘 API Documentation - Sistem Parkir Otomatis BINUS

Dokumentasi ini menjelaskan endpoint-endpoint REST API yang digunakan dalam sistem parkir otomatis, termasuk untuk mengelola pengguna, slot parkir, dan catatan parkir (masuk dan keluar).

---

## 🌐 Base URL
```

[http://localhost:5000/api](http://localhost:5000/api)

````

---

## 🔐 Authentication

Saat ini tidak digunakan. Semua endpoint dapat diakses tanpa autentikasi.

---

## 🚗 Parking Records API

### 📥 POST `/api/parking`

**Deskripsi:**
Mendaftarkan kendaraan masuk berdasarkan RFID. Sistem akan otomatis memberikan slot kosong.

**Request Body:**
```json
{
  "rfid": "1234567890"
}
````

**Response:**

```json
{
  "message": "Kendaraan berhasil masuk",
  "slot": "1B-03"
}
```

---

### 📤 POST `/api/keluar`

**Deskripsi:**
Mengeluarkan kendaraan dari sistem berdasarkan RFID dan mencatat waktu keluar.

**Request Body:**

```json
{
  "rfid": "1234567890"
}
```

**Response:**

```json
{
  "message": "Kendaraan keluar dari slot 1B-03"
}
```

---

### 📋 GET `/api/parking`

**Deskripsi:**
Mengambil semua catatan parkir (riwayat masuk dan keluar kendaraan).

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

**Error Response:**

```json
{
  "error": "Deskripsi kesalahan"
}
```

---

## 🅿️ Slot API

### 📋 GET `/api/all-slots`

**Deskripsi:**
Mengambil seluruh daftar slot parkir dan statusnya (kosong / terisi).

**Response:**

```json
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
```

---

### 🔄 POST `/api/update-slot`

**Deskripsi:**
Memperbarui status `is_occupied` dari sebuah slot parkir.

**Request Body:**

```json
{
  "id": 1,
  "isOccupied": true
}
```

**Response:**

```json
{
  "message": "Status slot diperbarui"
}
```

---

## ⚙️ Status & Error Kode

| Code | Deskripsi             |
| ---- | --------------------- |
| 200  | OK                    |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

## ✍️ Author

- Project oleh: **joshuaimanuel1**
- Repositori GitHub: [github.com/joshuaimanuel1/binus-parking-otomatis](https://github.com/joshuaimanuel1/binus-parking-otomatis)

```

```
