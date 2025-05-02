# Sistem Parkir Otomatis BINUS

Sistem Parkir Otomatis BINUS adalah aplikasi untuk mengelola parkir di kampus BINUS menggunakan RFID dan deteksi kendaraan dengan kamera. Aplikasi ini terdiri dari backend yang berbasis Node.js dan frontend yang berbasis React, dengan fungsionalitas untuk memantau dan mengelola slot parkir secara otomatis.

## Fitur

- **Pendaftaran RFID**: Pengguna dapat mendaftar menggunakan RFID untuk mendapatkan slot parkir.
- **Deteksi Kendaraan**: Kamera digunakan untuk mendeteksi keberadaan kendaraan di slot parkir.
- **Pembaharuan Status Slot**: Slot parkir akan diperbarui secara otomatis berdasarkan apakah slot tersebut terisi atau kosong.

## Teknologi

- **Backend**: Node.js, Express.js, MongoDB (atau MySQL sesuai preferensi)
- **Frontend**: React.js
- **Deteksi Kendaraan**: TensorFlow.js dengan model COCO-SSD untuk deteksi objek.
- **Database**: MySQL
- **Penyimpanan dan Keamanan**: Git untuk version control, JSON Web Tokens (JWT) untuk autentikasi pengguna.

## Instalasi

1. Clone repositori ini:
   ```bash
   git clone https://github.com/username/binus-parking-otomatis.git
   ```
