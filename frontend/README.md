# SimpleHouse 🏥
**Hospital Queue Management System**

Aplikasi web untuk manajemen antrian rumah sakit, dibangun menggunakan HTML, CSS, dan JavaScript (Frontend Only).

---

## 📋 Prasyarat

Tidak ada instalasi dependency yang diperlukan. Proyek ini menggunakan **pure HTML, CSS, dan JavaScript** tanpa framework atau build tools.

Yang dibutuhkan:
- **Web Browser** modern (Chrome, Firefox, Edge, Safari)
- **Text Editor** (VS Code, Sublime Text, dll.) — untuk mengedit kode
- **(Opsional) Live Server** — untuk pengalaman development yang lebih baik

---

## 🚀 Cara Menjalankan

### Opsi 1: Live Server (Direkomendasikan)

Menggunakan extension **Live Server** di VS Code:

1. Buka folder `frontend` di VS Code
2. Install extension **Live Server** (jika belum ada):
   - Buka Extensions (`Ctrl+Shift+X`)
   - Cari "Live Server" oleh Ritwick Dey
   - Klik **Install**
3. Klik kanan pada file `index.html`
4. Pilih **"Open with Live Server"**
5. Browser akan otomatis terbuka di `http://127.0.0.1:5500`

### Opsi 2: Langsung Buka di Browser

1. Buka File Explorer
2. Navigasi ke folder `frontend`
3. Klik dua kali pada file `index.html`
4. File akan terbuka langsung di browser default

> **Catatan:** Beberapa fitur mungkin tidak berfungsi optimal saat dibuka langsung (tanpa server) karena kebijakan CORS pada browser.

### Opsi 3: HTTP Server via Terminal

Jika sudah memiliki **Node.js** terinstall:

```bash
# Install http-server secara global (sekali saja)
npm install -g http-server

# Jalankan dari folder frontend
cd frontend
http-server -p 8080

# Buka browser: http://localhost:8080
```

Atau menggunakan **Python**:

```bash
# Python 3
cd frontend
python -m http.server 8080

# Buka browser: http://localhost:8080
```

---

## 📁 Struktur Folder

```
frontend/
├── index.html              → Landing page / Entry point
├── css/
│   └── style.css           → Global styles & design tokens
├── js/
│   └── script.js           → Global logic & mock functions
├── user/
│   ├── register.html       → Halaman registrasi user
│   ├── login.html          → Halaman login user
│   ├── dashboard.html      → Dashboard user (lihat antrian)
│   ├── make-queue.html     → Buat antrian baru
│   └── log.html            → Riwayat antrian
├── admin/
│   ├── register.html       → Halaman registrasi admin
│   ├── login.html          → Halaman login admin
│   ├── dashboard.html      → Dashboard admin
│   └── navigate.html       → Manajemen antrian
├── instructions.md         → Instruksi agen pengembangan
├── DESIGN.md               → Design tokens dari Figma
└── README.md               → File ini
```

---

## 👥 Role Pengguna

| Role | Warna Utama | Halaman |
|------|-------------|---------|
| **User** | `#4968AD` (Biru) | Register, Login, Dashboard, Make Queue, Log |
| **Admin** | `#C53939` (Merah) | Register, Login, Dashboard, Navigate |

---

## 🛠️ Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Styling dengan CSS Variables (design tokens)
- **JavaScript (Vanilla)** — Logika interaksi & simulasi data
- **localStorage** — Penyimpanan data sementara (mock backend)
- **Google Fonts** — Inter, Inria Sans, K2D

---

## 📝 Catatan Pengembangan

- Proyek ini merupakan **frontend-only**. Backend belum diintegrasikan.
- Semua data disimpan di **localStorage** browser sebagai simulasi.
- Validasi form dilakukan di sisi klien (client-side validation).
- Desain mengikuti spesifikasi dari file `DESIGN.md` yang diekstrak dari Figma.
