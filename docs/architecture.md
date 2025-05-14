# 📐 Architecture Overview - Sistem Parkir Otomatis BINUS

Dokumen ini menjelaskan **arsitektur sistem**, **komponen utama**, dan bagaimana sistem bekerja secara keseluruhan dalam proyek **Sistem Parkir Otomatis BINUS**. Sistem ini dirancang untuk mengelola slot parkir secara otomatis menggunakan RFID dan deteksi kendaraan berbasis kamera.

---

## 🧱 1. Arsitektur Umum

```
+-----------------+        +--------------------+       +-----------------+
|  RFID Scanner   | <----> |   Backend API      | <---> |     Database    |
+-----------------+        +--------------------+       +-----------------+
                                ↑       ↑
                                |       |
                         +------------+  +---------------+
                         | Frontend   |  | Kamera + AI    |
                         | React App  |  | (COCO-SSD)     |
                         +------------+  +---------------+
```

---

## 🧩 2. Komponen Utama

### A. Frontend (React.js)

- **Folder**: `frontend/src/`
- **Tujuan**: Antarmuka pengguna (UI/UX) untuk pengelolaan sistem parkir.
- **Komponen**:

  - `App.js`: Routing utama dan layout.
  - `KeluarParkir.jsx`: Komponen untuk mengelola proses keluar parkir.
  - `SlotStatus`, `DaftarMasuk`, dll.: Visualisasi status slot parkir dan input RFID.

- **Interaksi**:

  - Mengakses REST API dari backend.
  - Menampilkan status slot real-time.
  - Input/tap RFID untuk masuk dan keluar.

### B. Backend (Node.js + Express)

- **Folder**: `backend/`
- **Tujuan**: Menyediakan REST API untuk frontend dan sistem eksternal (kamera, RFID).
- **Struktur**:

  - `controllers/`: Logika utama (parking, slot, user).
  - `routes/`: Routing HTTP (`/api/parking`, `/api/slots`, dll).
  - `models/`: Skema dan operasi database (ParkingRecord, Slot, User).
  - `config/db.js`: Koneksi database MySQL.
  - `server.js`: Entry point server Express.

### C. Database (MySQL)

- **Folder**: `database/schema.sql`
- **Tabel**:

  - `users`: Data pengguna dengan RFID.
  - `parking_slots`: Slot parkir dengan status (terisi/kosong).
  - `parking_records`: Riwayat keluar/masuk berdasarkan waktu dan slot.

### D. Kamera + AI (COCO-SSD)

- **Deteksi kendaraan secara real-time**:

  - Menggunakan TensorFlow\.js COCO-SSD.
  - Mengirim status slot ke backend melalui API ketika kendaraan terdeteksi atau keluar.

### E. RFID Scanner

- Mengidentifikasi kendaraan berdasarkan tag RFID.
- Mengirimkan ID RFID ke backend untuk memverifikasi pengguna dan memperbarui status slot.

---

## 🔗 3. Alur Sistem

### A. Proses Masuk Parkir

1. Kendaraan tap kartu RFID di pintu masuk.
2. Backend menerima ID RFID dan mencari slot kosong.
3. Jika slot tersedia:

   - Slot ditandai “terisi”.
   - Record masuk dibuat.
   - UI menampilkan lokasi slot ke pengguna.

### B. Proses Keluar Parkir

1. Pengguna tap RFID di pintu keluar.
2. Backend mencari record aktif berdasarkan RFID.
3. Slot ditandai “kosong”.
4. Waktu keluar dicatat di `parking_records`.

### C. Deteksi Otomatis Kamera

1. Kamera mendeteksi mobil masuk/keluar slot.
2. Model COCO-SSD dijalankan via browser atau Python script.
3. Sistem secara otomatis memperbarui status slot melalui API.

---

## 🔐 4. Autentikasi dan Keamanan

- Belum diterapkan login, namun bisa ditambahkan JWT Auth di backend.
- Validasi RFID dilakukan dengan mencocokkan ke tabel `users`.

---

## 🔁 5. Integrasi Hardware

| Komponen | Teknologi                      | Tujuan                 |
| -------- | ------------------------------ | ---------------------- |
| Kamera   | Webcam / CCTV + TensorFlow\.js | Deteksi kendaraan      |
| RFID     | Arduino + RFID Reader          | Input ID pengguna      |
| Server   | Node.js Express                | Komunikasi antar modul |
| Database | MySQL via phpMyAdmin           | Penyimpanan dan log    |

---

## ⚙️ 6. Deployment & Pengembangan

- **Dev**: Jalankan frontend (`npm start`) dan backend (`node server.js`) secara lokal.
- **Prod**: Bisa di-deploy di server lokal BINUS atau cloud (Heroku, Vercel, AWS).

---

## 🧠 7. Catatan Pengembangan

- Struktur direktori sudah disiapkan agar scalable.
- Modul dapat diperluas untuk mendukung lebih banyak lantai parkir, sistem reservasi, dan login pengguna.

---
