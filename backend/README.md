# Backend - Sistem Parkir Otomatis

## Deskripsi

Backend untuk sistem parkir otomatis menggunakan Node.js, Express, dan MySQL.

## Struktur Folder

- `controllers/` - Mengelola logika aplikasi untuk rute API.
- `models/` - Mendefinisikan skema database (User, Slot, ParkingRecord).
- `routes/` - Endpoint API untuk frontend.
- `config/` - Konfigurasi koneksi database.
- `server.js` - Entry point server Express.

## Teknologi

- Node.js
- Express
- MySQL
- Sequelize ORM

## Instalasi

1. Install dependensi:
   ```bash
   npm install
   ```
2. Jalankan server:
   ```bash
   node server.js
   ```

## Rute API

-POST /api/parking - Input RFID untuk masuk parkir
-POST /api/exit - Input RFID untuk keluar parkir
-POST /api/parking/allocate: Alokasikan slot parkir.
-GET /api/parking/all-slots: Dapatkan semua slot parkir.
-POST /api/slot/update: Perbarui status slot parkir.
