# Agent Instructions
Project Name: SimpleHouse
Type: Web App
Tech Stack: HTML, CSS, JS (Frontend Only)
Roles: User, Admin

## The 3-Layer Architecture
1. **Presentation Layer (Frontend):**
   - Struktur UI menggunakan pure HTML5 dan CSS3.
   - Menggunakan font **Inter**.
   - **Warna Utama User:** `#4968AD`
   - **Warna Utama Admin:** `#C53939`
2. **Business Logic Layer:**
   - Karena backend ditunda, simulasi logika dasar (seperti perpindahan halaman, validasi form, dan generate nomor antrian dummy) akan ditangani oleh Vanilla JavaScript.
3. **Data Layer:**
   - Penyimpanan sementara akan menggunakan `localStorage` browser jika diperlukan simulasi sebelum backend diintegrasikan.

## Operating Principles
- **Pemisahan Konteks:** Halaman untuk User dan Admin dipisahkan secara ketat dalam folder `/user` dan `/admin`.
- **Konsistensi Desain:** Tata letak (form, input, tombol, dashboard) mengikuti panduan visual dari dokumen desain yang telah disepakati.
- **Validasi Klien:** Memastikan pengguna tidak menginput data kosong sebelum form disubmit (sesuai spesifikasi PB-09).

## Self-annealing loop
- **Fase 1:** Pembuatan kerangka struktur folder, penulisan instruksi agen, dan slicing UI awal (Register & Login).
- **Fase 2:** Slicing Dashboard untuk User dan Admin (termasuk status antrian).
- **Fase 3:** Slicing fitur spesifik (Make Queue, Log untuk User, Navigate untuk Admin) serta implementasi mock interaksi JS.

## File Organization
```
SimpleHouse/
├── instructions.md
├── index.html            (Landing / Entry point)
├── css/
│   └── style.css         (Global styles, typography, color variables)
├── js/
│   └── script.js         (Global / Mock logic)
├── user/
│   ├── register.html     (User Register)
│   ├── login.html        (User Login)
│   ├── dashboard.html    (Dashboard / No Queue & Some Queue)
│   ├── make-queue.html   (Buat Antrian)
│   └── log.html          (Riwayat / Log)
└── admin/
    ├── register.html     (Admin Register)
    ├── login.html        (Admin Login)
    ├── dashboard.html    (Dashboard Admin)
    └── navigate.html     (Manajemen Antrian)
```
