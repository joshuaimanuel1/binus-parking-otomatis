# ⚙️ Setup Guide - Sistem Parkir Otomatis BINUS

Panduan ini menjelaskan langkah-langkah lengkap untuk menjalankan proyek Sistem Parkir Otomatis secara lokal di mesin Anda.

---

## 🗂️ Struktur Direktori

```
binus-parking-otomatis/
├── backend/
│   ├── controllers/
│   │   ├── parkingController.js
│   │   ├── slotController.js
│   ├── models/
│   │   ├── ParkingRecord.js
│   │   ├── Slot.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── parkingRoutes.js
│   │   ├── slotRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── KeluarParkir.jsx
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── ...
│   └── README.md
│
├── database/
│   └── schema.sql
│
├── .gitignore
├── README.md
└── docs/
    ├── api-docs.md
    ├── setup-guide.md
    └── architecture.md
```

---

## 1⃣️ Setup Backend

### a. Masuk ke direktori backend

```bash
cd backend
```

### b. Install dependencies

```bash
npm install
```

### c. Jalankan server

```bash
node server.js
```

Server akan berjalan di: `http://localhost:5000`

> Pastikan database MySQL aktif melalui XAMPP/phpMyAdmin

---

## 2⃣️ Setup Frontend (React)

### a. Masuk ke direktori frontend

```bash
cd frontend
```

### b. Install dependencies

```bash
npm install
```

### c. Jalankan frontend

```bash
npm start
```

Frontend akan berjalan di: `http://localhost:3000`

---

## 3⃣️ Setup Database

### a. Buka XAMPP dan jalankan MySQL

### b. Buka `phpMyAdmin` dan buat database baru:

```sql
CREATE DATABASE binus_parking;
```

### c. Import skema tabel

Masuk ke tab `Import`, dan pilih file:

```
database/schema.sql
```

Klik `Go` untuk mengeksekusi.

---

## 4⃣️ Environment Configuration

Jika digunakan, buat file `.env` di `backend/`:

```bash
touch .env
```

Contoh isi:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=binus_parking
PORT=5000
```

---

## ✅ Selesai!

Akses frontend di: [http://localhost:3000](http://localhost:3000)
API backend di: [http://localhost:5000/api](http://localhost:5000/api)

---

## 🗕️ Last Updated

2025-05-03
