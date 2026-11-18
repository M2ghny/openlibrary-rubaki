# DESIGN.md — RUBAKI (Ruang Baca Kita)

Design System & UI Guidelines. Dokumen ini adalah pedoman utama tampilan dan pengembangan website RUBAKI. Semua halaman, komponen, dan elemen visual wajib mengikuti dokumen ini.

> **Cara memakai:** tempel dokumen ini di awal prompt, lampirkan `style.css`, lalu tulis tugas bagianmu. Jangan menulis ulang gaya yang sudah ada di `style.css`. Gunakan class dan variabel yang tersedia.

---

## 1. Identitas Website

RUBAKI (Ruang Baca Kita) adalah website perpustakaan digital anak yang menyediakan katalog cerita dan bacaan edukatif berdasarkan kelompok usia dan kategori bacaan.

Konsep desain: **Classic Farm – Playful & Colorful**, yaitu suasana pedesaan yang hangat, maskot rubah, buku, dan elemen alam dengan warna-warna cerah.

Karakter desain:
- **Playful**: ceria, penuh warna, menarik bagi anak.
- **Friendly**: ramah, sederhana, mudah digunakan.
- **Educational**: mendukung kegiatan membaca dan belajar.
- **Readable**: mengutamakan keterbacaan teks.
- **Consistent**: tampilan seragam di semua halaman.
- **Responsive**: nyaman di desktop, tablet, dan smartphone.

Maskot rubah adalah identitas visual utama dan boleh dipakai sebagai dekorasi di Beranda dan bagian lain.

---

## 2. Color Palette

Pakai variabel CSS, **jangan menulis kode HEX sendiri**.

| Warna | HEX | Variabel | Penggunaan |
|---|---|---|---|
| Sky Blue | `#B3E0EE` | `--biru-langit` | Latar navbar, latar elemen, dekorasi, badge |
| Yellow | `#FFB705` | `--kuning` | Highlight, ikon, badge |
| Green | `#0EAC49` | `--hijau` | Aksen positif, indikator berhasil, tombol sukses |
| Orange | `#F78820` | `--oranye` | Tombol utama, garis bawah menu, elemen penting (teks/ikon di atasnya: Dark Brown) |
| Red | `#ED1A26` | `--merah` | Hanya untuk peringatan |
| Blue | `#346FB6` | `--biru` | Logo, footer, tombol kedua |
| Cream | `#FFF8E9` | `--krem` | Background utama |
| White | `#FFFFFF` | `--putih` | Background card dan konten |
| Dark Brown | `#49351F` | `--cokelat` | Teks utama dan judul |

Warna turunan (untuk dekorasi, hover, dan teks tertentu, bukan warna baru):

| Nama | HEX | Variabel | Penggunaan |
|---|---|---|---|
| Krem Gelap | `#FFEFD2` | `--krem-gelap` | Latar panel/blok section |
| Kayu | `#9A6330` | `--kayu` | Judul papan kayu |
| Kayu Gelap | `#7A4A20` | `--kayu-gelap` | Garis tepi papan kayu |
| Oranye Gelap | `#D9700F` | `--oranye-gelap` | Cadangan. **Jangan** dipakai sebagai latar di bawah teks Dark Brown (kontras turun) |
| Biru Gelap | `#234E86` | `--biru-gelap` | Teks menu navbar, teks tombol "Lihat Semua", hover tombol kedua |
| Hijau Gelap | `#087A32` | `--hijau-gelap` | Latar tombol sukses (teks putih) |
| Biru Langit Gelap | `#9ED3E4` | `--biru-langit-gelap` | Hover tombol "Lihat Semua" |
| Badge Hijau | `#BDEBCB` | `--badge-hijau` | Badge Sains, Alam, dan Pengetahuan |
| Badge Kuning | `#FFE08A` | `--badge-kuning` | Badge Cerita Rakyat |
| Badge Oranye | `#FFD2A6` | `--badge-oranye` | Badge Cerita Sehari-hari |
| Krem Kaca | `rgba(255, 248, 233, 0.92)` | `--krem-kaca` | Panel teks hero di mobile |

Ketentuan:
- Orange dan Sky Blue adalah warna identitas utama.
- Cream dipakai sebagai background utama agar terasa hangat.
- Blue untuk footer, logo, dan tombol kedua. Yellow dan Green hanya aksen.
- Red dihemat, hanya untuk informasi peringatan.
- Teks dan ikon di atas Orange wajib Dark Brown, **bukan putih**.
- Teks di atas Yellow wajib Dark Brown. Teks di atas Sky Blue memakai Dark Brown atau Biru Gelap.
- Teks putih hanya di atas Blue, Biru Gelap, Hijau Gelap, atau Kayu.
- Jangan memakai latar gelap atau hitam.
- Jangan menyampaikan informasi hanya lewat warna.

### Aturan kontras

Semua pasangan teks dan latar wajib punya rasio kontras **minimal 4.5:1** (teks besar, yaitu 24 px ke atas atau 19 px tebal ke atas, minimal **3:1**). Pasangan yang boleh dipakai:

| Teks / ikon | Latar | Rasio | Dipakai di |
|---|---|---|---|
| Dark Brown | White | 11.59 | Teks isi di kartu |
| Dark Brown | Cream | 10.96 | Teks isi halaman |
| Dark Brown | Krem Gelap | 10.22 | Teks di panel |
| Dark Brown | Sky Blue | 8.17 | Menu navbar aktif |
| Dark Brown | Yellow | 6.64 | Teks di atas kuning |
| Dark Brown | Orange | 4.69 | Tombol utama, tombol cari, filter aktif |
| Dark Brown | Badge (hijau/kuning/oranye) | 8.29–8.98 | Teks badge |
| Biru Gelap | Sky Blue | 5.91 | Menu navbar |
| Biru Gelap | Biru Langit Gelap | 5.15 | Hover tombol "Lihat Semua" |
| Blue | White | 5.13 | Label sumber, ikon |
| White | Blue | 5.13 | Tombol kedua, footer |
| White | Biru Gelap | 8.38 | Hover tombol kedua |
| White | Hijau Gelap | 5.47 | Tombol sukses |
| White | Kayu | 5.00 | Judul papan kayu |

Pasangan yang **tidak boleh** dipakai untuk teks:

| Pasangan | Rasio | Catatan |
|---|---|---|
| White di atas Orange | 2.47 | Pakai Dark Brown |
| White di atas Green `#0EAC49` | 2.99 | Pakai Hijau Gelap |
| Yellow di atas Blue | 2.94 | Hover footer pakai garis bawah, bukan warna kuning |
| Orange di atas Sky Blue | 1.74 | Hanya untuk judul hero besar dan wajib memakai garis tepi Dark Brown |
| Red di atas White / Cream | 4.40 / 4.16 | Jangan untuk teks kecil. Pakai Red sebagai ikon atau garis tepi, teksnya Dark Brown |

Jika ragu, cek pasangan warna di alat pemeriksa kontras (misalnya WebAIM Contrast Checker) sebelum dipakai.

---

## 3. Typography

Dua font utama. Tambahkan di `<head>` setiap halaman:

```html
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
```

**Fredoka** (`--font-judul`): logo, judul halaman, heading, judul section, judul banner, judul kartu. Karakter bulat, tebal, ceria.

**Nunito** (`--font-isi`): paragraf, informasi buku, menu navigasi, label tombol, formulir, informasi tambahan. Karakter bersih dan mudah dibaca.

| Elemen | Desktop | Mobile |
|---|---|---|
| H1 | 40–48 px | 30–36 px |
| H2 | 30–36 px | 24–28 px |
| H3 | 24–28 px | 20–24 px |
| H4 | 18–22 px | 18–20 px |
| Body | 16 px | 14–16 px |
| Caption | 14 px | 12–13 px |
| Button | 15–16 px | 14–15 px |

Ketentuan:
- Fredoka untuk heading, Nunito untuk body text.
- Hindari font dekoratif untuk paragraf panjang.
- Jangan membuat teks informasi penting terlalu kecil.

---

## 4. Layout dan Spacing

- Lebar maksimal konten desktop: **1200 px**, sekitar 90% layar, di tengah halaman (`.container`).
- Jarak antarsection 32–48 px, antarkomponen 16–24 px.
- Beri ruang kosong yang cukup, jangan terlalu padat.
- Blok section berlatar Krem Gelap memakai class `panel`.

Border radius:

| Komponen | Ukuran |
|---|---|
| Input | 8 px |
| Tombol | 50 px |
| Card | 20–24 px (pakai 24 px) |
| Section/panel | 24 px |

Bayangan selalu lembut (variabel `--bayangan` dan `--bayangan-lembut`).

---

## 5. Navbar

Dipakai di semua halaman, `<header class="navbar">`.

Struktur:
- Logo RUBAKI di kiri. Versi horizontal (`img/logo.png`) di layar lebar, versi rubah saja (`img/logo-ikon.png`) di 1024 px ke bawah, dipasang dengan `<picture>`.
- Menu navigasi di kanan.
- Tombol cari berupa link bulat oranye ke `koleksi.html#cari` (ikon kaca pembesar SVG berwarna Dark Brown), diletakkan **di luar** `<nav class="navbar-menu">`, di samping hamburger, supaya tetap terlihat di HP.

Menu utama (urutan tetap):
1. Beranda
2. Koleksi
3. Panduan Orang Tua & Guru
4. Kontributor
5. Tentang (jika dibuat sebagai halaman terpisah)

Aturan desain:
- Background Sky Blue, teks **Biru Gelap** (`--biru-gelap`), font Nunito bobot 700, ukuran 15–16 px.
- Bayangan lembut, sudut bawah membulat 24 px, menempel di atas saat scroll.
- Menu aktif: teks **Dark Brown** dengan **garis bawah Orange** (beri class `aktif`).
- Hover: teks tidak berubah warna, cukup muncul **garis bawah Orange**.
- Layar **1024 px ke bawah**: menu jadi hamburger (class `nav-toggle`), menu terbuka dengan class `buka`. Tombol cari dan hamburger berdampingan di kanan logo. Perilaku buka/tutup menu dan `aria-expanded` sudah diatur `js/main.js` (dimuat di setiap halaman), jangan dibuat ulang di halaman.
- Ikon hamburger dan kaca pembesar memakai SVG yang ditulis langsung di HTML (bukan emoji), warnanya mengikuti `currentColor`.

Contoh:
```html
<header class="navbar">
  <div class="container navbar-isi">
    <a class="logo" href="index.html">
      <picture>
        <source media="(max-width: 1024px)" srcset="img/logo-ikon.png">
        <img src="img/logo.png" alt="RUBAKI - Ruang Baca Kita">
      </picture>
    </a>
    <nav class="navbar-menu" id="menu">
      <a class="aktif" href="index.html">Beranda</a>
      <a href="koleksi.html">Koleksi</a>
      <a href="panduan.html">Panduan Orang Tua &amp; Guru</a>
      <a href="kontributor.html">Kontributor</a>
      <a href="tentang.html">Tentang</a>
    </nav>
    <a class="tombol-cari" href="koleksi.html#cari" aria-label="Cari buku">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>
    </a>
    <button class="nav-toggle" aria-label="Buka menu" aria-expanded="false" aria-controls="menu">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
  </div>
</header>
```

---

## 6. Button

Semua tombol berbentuk kapsul (radius 50 px), font Nunito bobot 800, padding 12–25 px, tinggi minimal 44 px, ada efek hover halus.

| Jenis | Class | Warna | Dipakai untuk |
|---|---|---|---|
| Utama | `tombol` | Orange, teks Dark Brown | Aksi utama: "Mulai Membaca", "Baca di Sumber Asli" |
| Kedua | `tombol tombol-kedua` | Blue, teks putih | Aksi tambahan: "Lihat Koleksi" |
| Sukses | `tombol tombol-sukses` | Hijau Gelap, teks putih | Konfirmasi jika diperlukan |
| Panah | `tombol tombol-panah` | Orange, ikon Dark Brown, bulat 44 px | Ke detail buku di kartu |
| Lihat semua | `tombol tombol-lihat` | Sky Blue, teks Biru Gelap | "Lihat Semua" di samping judul section |

Hover tombol utama, sukses, dan panah: tombol naik sedikit dan bayangan lebih tebal, **warna latar tidak berubah** (agar kontras teks tetap terjaga).

Aturan: satu bagian layar maksimal satu tombol utama.

---

## 7. Halaman Beranda

Urutan bagian dari atas ke bawah:

1. **Navbar.**
2. **Hero** (`.hero`): latar ilustrasi pedesaan dan maskot rubah. Isi: sapaan "Selamat Datang di" (`.hero-sapaan`), nama **RUBAKI!** besar (`.hero-judul`, Fredoka, oranye dengan garis tepi dan bayangan Dark Brown agar tetap terbaca), tagline "Tempat membaca, belajar, dan berimajinasi bersama." (`.hero-tagline`), tombol utama "Mulai Membaca →" menuju Koleksi. Titik penanda carousel (`.hero-titik`) hanya dipasang jika carousel dibuat. Teks hero harus berada di area gambar yang terang/sederhana. Di mobile, teks hero berada di atas panel krem semi transparan (`--krem-kaca`) agar tidak menimpa gambar maskot.
3. **Strip keunggulan** (`.keunggulan`): 4 item ikon + teks pendek (`.keunggulan-item`), yaitu "Cerita dari Sumber Terbuka", "Untuk Semua Anak", "Belajar Jadi Lebih Seru!", "Bebas Iklan dan Aman".
4. **Koleksi Buku Favorit**: di dalam `.panel`, judul papan kayu, tombol "Lihat Semua →", lalu 3–4 kartu buku versi ringkas.
5. **Footer.**

Catatan: blok "Agenda Kegiatan" pada mockup awal **tidak dibuat** di versi awal (lihat bagian 20).

---

## 8. Judul Section Papan Kayu

Judul besar tiap section di Beranda memakai gaya papan kayu:
- Class `judul-papan` (Fredoka 28 px, teks putih, latar Kayu, garis tepi Kayu Gelap, sudut 16 px, ikon kecil di kiri).
- Jika ada tombol di sampingnya (misal "Lihat Semua"), bungkus dengan `.judul-baris`.

```html
<div class="judul-baris">
  <h2 class="judul-papan">Koleksi Buku Favorit</h2>
  <a class="tombol tombol-lihat" href="koleksi.html">Lihat Semua →</a>
</div>
```

Halaman lain (Panduan, Kontributor) boleh memakai heading biasa agar tidak terlalu ramai.

---

## 9. Katalog Buku dan Book Card

Katalog adalah fitur utama RUBAKI. Kartu dibungkus `.grid-buku`.

**Isi Book Card lengkap (halaman Koleksi):**
1. Sampul buku
2. Judul
3. Nama penulis
4. Rentang usia (badge)
5. Kategori (badge)
6. Tombol untuk melihat detail

**Versi ringkas (Beranda):** sampul, judul, badge kategori, tombol panah. Penulis dan usia boleh ditiadakan.

Aturan desain:
- Class: `kartu-buku`, `kartu-sampul`, `kartu-judul`, `kartu-penulis`, `kartu-bawah`.
- Background putih, radius 24 px, padding 16–20 px, bayangan lembut.
- Sampul rasio konsisten **3:4** (`aspect-ratio`), `object-fit: cover`.
- Judul Fredoka bobot 600–700. Saat hover kartu naik sedikit.
- Tombol detail berwarna Orange.

Warna badge kategori:

| Kategori | Class |
|---|---|
| Dongeng | `badge` (Sky Blue) |
| Cerita Rakyat | `badge badge-kuning` |
| Cerita Sehari-hari | `badge badge-oranye` |
| Sains, Alam, dan Pengetahuan | `badge badge-hijau` |

Badge usia memakai `badge badge-usia` (latar putih, garis tepi Blue 2 px, teks Dark Brown) supaya berbeda dari badge Dongeng. Teks badge selalu Dark Brown.

Contoh:
```html
<article class="kartu-buku">
  <img class="kartu-sampul" src="img/sampul/petualangan-si-kancil.png" alt="Sampul buku Petualangan Si Kancil">
  <h3 class="kartu-judul">Petualangan Si Kancil</h3>
  <p class="kartu-penulis">Nama Penulis</p>
  <div class="kartu-bawah">
    <span class="badge">Dongeng</span>
    <a class="tombol tombol-panah" href="detail.html?id=petualangan-si-kancil" aria-label="Lihat detail Petualangan Si Kancil">→</a>
  </div>
</article>
```

**Pencarian judul** (halaman Koleksi): kotak cari dengan `id="cari"` diletakkan di atas filter. Link tombol cari di navbar (`koleksi.html#cari`) mengarah ke kotak ini.

```html
<label class="sr-only" for="cari">Cari judul buku</label>
<input type="search" id="cari" placeholder="Cari judul buku...">
```

**Filter katalog** (wajib, class `filter` dan `filter-pilihan`):
- Filter usia: Anak (3–8 tahun), Anak Besar (9–12 tahun), Remaja (13–17 tahun).
- Filter kategori: Dongeng, Cerita Rakyat, Cerita Sehari-hari, Sains/Alam/Pengetahuan.
- Pengguna bisa memilih usia dan kategori sekaligus. Hasil menyesuaikan filter.
- Hasil pencarian judul bekerja **bersamaan** dengan filter usia dan kategori.
- Wajib ada tombol **Atur Ulang** untuk menghapus filter.
- Tombol filter wajib berupa `<button type="button" class="filter-pilihan" aria-pressed="false">`. Saat aktif, `aria-pressed` menjadi `"true"`.
- Gaya aktif (latar oranye, teks Dark Brown, dan tanda centang, bukan hanya warna) berlaku untuk `.filter-pilihan.aktif` dan `.filter-pilihan[aria-pressed="true"]`.

```html
<button type="button" class="filter-pilihan" aria-pressed="false">Dongeng</button>
<button type="button" class="filter-pilihan" aria-pressed="true">Cerita Rakyat</button>
```

- Mudah dipakai di mobile. Jika hasil kosong, tampilkan kondisi kosong (bagian 15).

---

## 10. Halaman Detail Buku

Informasi wajib: sampul, judul, penulis, ilustrator (jika ada), rentang usia, bahasa, kategori, abstrak/ringkasan, sumber asli, informasi lisensi, tautan sumber asli.

Tombol utama: **"Baca di Sumber Asli"** (`tombol`, Orange). Tombol mengarah ke sumber asli, **bukan** menyediakan salinan cerita di website. Buka di tab baru (`target="_blank" rel="noopener"`).

Aturan desain:
- Desktop: dua kolom (`.detail`): sampul di kiri (`.detail-sampul`), info di kanan (`.detail-info`). Mobile: satu kolom.
- Metadata disusun rapi dalam tabel `.detail-tabel`.
- Abstrak mudah dibaca, tidak terlalu padat.
- Label sumber dan lisensi (`.label-sumber`) harus terlihat jelas dan tautan sumber mudah ditemukan.

---

## 11. Label Sumber dan Lisensi

Setiap konten katalog wajib menampilkan: nama sumber, status sumber/lisensi, tautan ke sumber asli.

Tiga status sumber (untuk pengelolaan data, tidak harus ditampilkan ke pengunjung):
1. **Prioritas**: diutamakan masuk katalog.
2. **Perlu Cek**: masih perlu pemeriksaan.
3. **Hanya Tautan**: hanya rujukan, **tidak dimasukkan** ke katalog.

Katalog hanya memakai status Prioritas dan Perlu Cek. Informasi lisensi harus sesuai yang tertulis di sumber asli. Jangan menganggap semua konten bebas dipakai hanya karena bisa diakses online.

---

## 12. Halaman Panduan Orang Tua dan Guru

Isi: penjelasan RUBAKI, panduan memilih bacaan sesuai usia, penjelasan kategori, cara memakai filter, cara membaca detail buku, penjelasan sumber dan lisensi.

Desain: bahasa sederhana dan informatif, susun dalam beberapa section/card (`.kartu`), pakai ikon pendukung, utamakan keterbacaan.

---

## 13. Halaman Kontributor

Informasi: nama kontributor, peran/kontribusi, deskripsi singkat, informasi pendukung jika ada.

Desain: layout card seragam (`.kartu`) di dalam `.grid-buku` atau grid sejenis, background putih atau krem, nama memakai Fredoka, deskripsi memakai Nunito, foto/ilustrasi proporsional jika ada.

---

## 14. Footer

Dipakai di semua halaman, `<footer class="footer">`.

Struktur:
- Logo dan nama RUBAKI.
- Slogan: "Tempat membaca, belajar, dan berimajinasi bersama."
- Tautan navigasi penting.
- Ikon media sosial (Instagram, YouTube, TikTok) jika tersedia (`.sosmed`).
- Hak cipta: `© 2026 RUBAKI. Ruang Baca Kita.` (`.hak-cipta`)
- Tombol bulat "kembali ke atas" (`.kembali-atas`) dengan `aria-label="Kembali ke atas"`.

Aturan desain:
- Background Blue, teks putih, heading Fredoka, body Nunito.
- **Tepi atas bergelombang** (sudah diatur di `.footer`).
- Hiasan ilustrasi buku, semak, atau maskot di sudut footer.
- Padding 32–48 px. Tautan putih, hover muncul garis bawah (bukan ganti warna).
- Mobile: tersusun satu kolom.

---

## 15. Kondisi Kosong

Jika data tidak ada (hasil filter kosong, pencarian tidak ketemu), tampilkan `.kosong`: ikon/ilustrasi kecil, kalimat ramah dan singkat, misalnya "Belum ada buku untuk pilihan ini~". Jangan tampilkan area kosong tanpa penjelasan.

```html
<div class="kosong">Belum ada buku untuk pilihan ini~</div>
```

---

## 16. Icon dan Ilustrasi

- Maskot rubah sebagai karakter utama.
- Ilustrasi buku, bunga, awan, pepohonan, bukit, pagar, dan suasana pedesaan.
- Kilatan kuning kecil boleh jadi dekorasi di sekitar judul.
- Gaya ilustrasi konsisten, jangan terlalu ramai.
- Gambar informatif wajib punya alt text. Gambar dekoratif memakai `alt=""`.
- Sampul buku disiapkan Zidan bersama data buku.
- Logo, maskot, gambar hero, ikon keunggulan, dan hiasan footer disiapkan Divisi Konten.
- Gambar logo, maskot, gambar hero, sampul buku, dan hiasan footer disimpan sebagai **PNG transparan** di folder `img/`.
- Ikon boleh berformat **SVG**, disimpan di `img/ikon/`, diambil dari folder ikon Divisi Konten.
- Jangan memakai gambar dari luar.

**Variasi logo:**

| Versi | File | Dipakai di |
|---|---|---|
| Horizontal | `img/logo.png` | Navbar layar lebar (di atas 1024 px) |
| Rubah saja | `img/logo-ikon.png` | Navbar HP dan tablet (1024 px ke bawah), favicon |
| Vertikal | `img/logo-vertikal.png` | Hero, halaman Tentang, footer |

Jangan mengubah proporsi atau warna logo.

---

## 17. Accessibility

- Kontras warna wajib memenuhi aturan di bagian 2 (minimal 4.5:1, teks besar minimal 3:1), font mudah dibaca.
- Informasi tidak hanya lewat warna (contoh: filter aktif punya tanda centang).
- Alt text pada gambar informatif.
- Label jelas pada tombol dan navigasi. Tombol ikon wajib punya `aria-label`.
- Area sentuh minimal **44×44 px**.
- Fokus keyboard terlihat (sudah diatur lewat `:focus-visible`).
- Penanda jelas pada menu dan filter aktif.
- Tombol filter memakai `<button type="button">` dengan `aria-pressed="true"` atau `"false"`. Gaya aktif berlaku untuk `.filter-pilihan.aktif` dan `.filter-pilihan[aria-pressed="true"]`.
- Hindari teks terlalu kecil dan tata letak membingungkan.

---

## 18. Privacy

RUBAKI mengutamakan privasi anak:
- Tidak ada akun dan login.
- Tidak ada iklan.
- Tidak meminta atau mengumpulkan data pribadi.
- Tidak ada formulir yang meminta informasi pribadi anak.
- Hindari pelacakan pengguna yang tidak perlu.

---

## 19. Responsive Design

| Perangkat | Lebar | Ketentuan |
|---|---|---|
| Desktop | di atas 1024 px | Navbar horizontal, konten maks 1200 px, katalog multi kolom, detail dua kolom |
| Tablet | 768–1024 px | Teks dan jarak menyesuaikan, kolom katalog dikurangi, navbar memakai hamburger |
| Mobile | di bawah 768 px | Navbar hamburger, satu kolom (katalog 2 kolom, 1 kolom di bawah 380 px), filter mudah dipakai, teks hero di atas panel krem semi transparan, **tidak ada scroll horizontal** |

---

## 20. Batasan Fitur Versi Awal

**Dibuat:**
1. Website responsif
2. Katalog buku berbentuk card
3. Filter usia dan kategori
4. Pencarian judul
5. Halaman detail buku
6. Abstrak/ringkasan bacaan
7. Tombol "Baca di Sumber Asli"
8. Label sumber dan lisensi
9. Halaman Panduan Orang Tua dan Guru
10. Halaman Kontributor

**Tidak dibuat:**
1. Akun dan login
2. Fitur mengunduh cerita
3. Fitur cerita acak
4. Mode baca khusus
5. Halaman/bagian Agenda Kegiatan

**Opsional:** audio dan video, jika sumber mendukung dan waktu memungkinkan.

Jangan menambah fitur di luar daftar ini tanpa persetujuan tim.

---

## 21. Standar Metadata Buku

Struktur data sama di katalog dan halaman detail.

| Metadata | Nama field | Keterangan |
|---|---|---|
| ID | `id` | Teks unik tanpa spasi, contoh `petualangan-si-kancil` |
| Judul | `judul` | Nama buku/cerita |
| Penulis | `penulis` | Nama penulis |
| Ilustrator | `ilustrator` | Boleh kosong |
| Usia | `usia` | `anak`, `anak-besar`, atau `remaja` |
| Bahasa | `bahasa` | Bahasa yang digunakan |
| Kategori | `kategori` | `dongeng`, `cerita-rakyat`, `cerita-sehari-hari`, atau `sains-alam-pengetahuan` |
| Abstrak | `abstrak` | Ringkasan isi |
| Sumber | `sumber` | Asal konten |
| Lisensi | `lisensi` | Informasi lisensi |
| Tautan | `tautan` | URL ke sumber asli |
| Sampul | `sampul` | Path gambar sampul |

Jika ilustrator kosong, bagian itu tidak ditampilkan.

---

## 22. Standar Teknis untuk Developer

Agar bagian-bagian dari banyak orang bisa digabung tanpa bentrok:

- Teknologi: **HTML, CSS, dan JavaScript biasa** (tanpa framework), kecuali tim memutuskan lain.
- Struktur folder:

```
rubaki/
├── index.html          (Beranda)
├── koleksi.html        (Katalog dan filter)
├── detail.html         (Detail buku, dibuka dengan ?id=...)
├── panduan.html        (Panduan Orang Tua dan Guru)
├── kontributor.html
├── tentang.html        (jika dibuat)
├── css/
│   ├── style.css       (CSS Global, JANGAN diubah tanpa izin)
│   └── <halaman>.css   (gaya khusus tiap halaman)
├── js/
│   ├── main.js         (dipakai semua halaman: hamburger & kembali ke atas)
│   └── <halaman>.js
├── data/
│   └── buku.js         (const BUKU = [...], semua data buku mengikuti metadata)
└── img/
    ├── logo.png
    ├── logo-ikon.png
    ├── logo-vertikal.png
    ├── sampul/
    └── ikon/
```

- Setiap halaman memakai `css/style.css` lebih dulu, baru file CSS halamannya.
- Setiap halaman memuat `js/main.js` dengan `<script src="js/main.js" defer></script>`. File ini berisi perilaku hamburger dan tombol kembali ke atas, jadi jangan menulis ulang di file lain.
- Tombol `.kembali-atas` wajib punya `aria-label="Kembali ke atas"`.
- Gaya khusus halaman ditulis di file CSS halaman itu sendiri, bukan di `style.css`.
- Nama class: huruf kecil, pisahkan dengan tanda hubung (`kartu-buku`). Class khusus halaman diawali nama halaman (`beranda-`, `koleksi-`, `detail-`).
- Navbar dan footer disalin persis dari bagian 5 dan 14 di setiap halaman.
- Data buku disimpan di `data/buku.js` berisi `const BUKU = [...]`, dimuat dengan `<script src="data/buku.js"></script>` sebelum script halaman, bukan ditulis langsung di HTML. Dengan cara ini web bisa dites hanya dengan membuka file HTML.
- Nama file: huruf kecil, tanpa spasi.

---

## 23. Daftar Class yang Tersedia di `style.css`

- **Layout:** `container`, `section`, `panel`
- **Navbar:** `navbar`, `navbar-isi`, `logo`, `navbar-menu`, `aktif`, `tombol-cari`, `nav-toggle`
- **Tombol:** `tombol`, `tombol-kedua`, `tombol-sukses`, `tombol-panah`, `tombol-lihat`
- **Beranda:** `hero`, `hero-isi`, `hero-sapaan`, `hero-judul`, `hero-tagline`, `hero-titik`, `keunggulan`, `keunggulan-item`, `judul-papan`, `judul-baris`
- **Buku:** `grid-buku`, `kartu-buku`, `kartu-sampul`, `kartu-judul`, `kartu-penulis`, `kartu-bawah`, `badge`, `badge-hijau`, `badge-kuning`, `badge-oranye`, `badge-usia`, `kartu`
- **Katalog:** `filter`, `filter-pilihan`
- **Detail:** `detail`, `detail-sampul`, `detail-info`, `detail-tabel`, `label-sumber`
- **Lainnya:** `kosong`, `footer`, `footer-isi`, `sosmed`, `hak-cipta`, `kembali-atas`, `caption`, `sr-only`

Butuh gaya yang belum ada? Buat di file CSS halamanmu sendiri memakai variabel warna dan font di atas, lalu kabari pemegang CSS Global.

---

## 24. Aturan Konsistensi untuk Developer

1. Pakai palet warna dan variabelnya.
2. Pakai Fredoka dan Nunito.
3. Pakai navbar dan footer yang seragam.
4. Pakai desain tombol dan card sesuai pedoman.
5. Terapkan filter usia dan kategori sesuai ketentuan.
6. Pastikan metadata buku seragam.
7. Tampilkan sumber dan lisensi dengan jelas.
8. Terapkan aksesibilitas dan privasi.
9. Pastikan semua halaman responsif.
10. Jangan menambah fitur di luar cakupan versi awal tanpa persetujuan tim.

**Larangan:**
- Jangan memakai warna di luar palet dan turunannya.
- Jangan memakai font selain Fredoka dan Nunito.
- Jangan memakai latar gelap/hitam.
- Jangan memakai teks putih di atas latar kuning, biru langit, atau oranye.
- Jangan membuat tombol, kartu, navbar, atau footer dengan gaya sendiri.
- Jangan mengubah `css/style.css` tanpa izin pemegang CSS Global.

---

## Catatan Akhir

DESIGN.md adalah pedoman utama desain dan pengembangan antarmuka RUBAKI. Seluruh halaman, komponen, dan elemen visual harus mengikuti ketentuan ini agar website konsisten, mudah digunakan, ramah anak, dan sesuai kebutuhan perpustakaan digital RUBAKI.
