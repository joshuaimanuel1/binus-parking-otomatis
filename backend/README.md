 # Backend - Sistem Parkir Otomatis

## Deskripsi
Backend untuk sistem parkir otomatis menggunakan Node.js, Express, dan MySQL.

## Teknologi
- Node.js
- Express
- MySQL
- Sequelize ORM

## Instalasi
1. Install dependensi:
   ```bash
   npm install
2. Jalankan server:
    ```bash
    node server.js

## Rute API
-POST /api/parking/allocate: Alokasikan slot parkir.
-GET /api/parking/all-slots: Dapatkan semua slot parkir.
-POST /api/slot/update: Perbarui status slot parkir.
