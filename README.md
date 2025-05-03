# Sistem Parkir Otomatis BINUS

Sistem Parkir Otomatis BINUS adalah aplikasi untuk mengelola parkir di kampus BINUS menggunakan RFID dan deteksi kendaraan dengan kamera. Aplikasi ini terdiri dari backend yang berbasis Node.js dan frontend yang berbasis React, dengan fungsionalitas untuk memantau dan mengelola slot parkir secara otomatis.

## Fitur

- **Manajemen Slot Parkir**: Mengelola slot parkir dan status terisi/tersedia.
- **Deteksi Kendaraan**: Menggunakan kamera untuk mendeteksi kendaraan yang parkir.
- **RFID**: Menggunakan RFID untuk memverifikasi kendaraan dan mengelola slot parkir.

## Teknologi yang Digunakan

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Model Deteksi Kendaraan**: TensorFlow.js (coco-ssd)

## Instalasi

1. Clone repository ini
2. Jalankan perintah berikut untuk menginstal dependensi di backend dan frontend:

   **Backend**:

   ```bash
   cd backend
   npm install
   ```
