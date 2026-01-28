# Context Specification: Nafaarts Landing Page

## Project Overview

Landing page untuk "Nafaarts", sebuah layanan solusi sekolah digital dan konsultan IT. Desain bersih, modern, dan profesional dengan aksen warna oranye.

## Tech Stack

- **Runtime/PM:** Bun
- **Framework:** TanStack Start (React)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (atau React Icons)
- **Fonts:** Poppins (Google Fonts / @fontsource)

## Design System

### Color Palette (Estimasi dari gambar)

- **Primary Orange:** `bg-orange-500` (approx #F97316) - Tombol utama, highlight.
- **Secondary Beige:** `bg-orange-50` atau `bg-[#FFF5E6]` - Background section CTA, tombol sekunder.
- **Text Dark:** `text-gray-900` - Judul.
- **Text Gray:** `text-gray-600` - Deskripsi paragraf.
- **White:** Background utama.

### Typography

- **H1 (Hero):** Bold, ukuran besar (~text-4xl/5xl).
- **H2 (Section Titles):** Semi-bold/Bold (~text-2xl/3xl).
- **Body:** Regular (~text-base).

## Page Structure (Section by Section)

1.  **Navbar:**
    - Logo "Nafaarts" (kiri).
    - Links: "Produk Digital" (kanan).
    - Button: "Book Demo" (Solid Orange).

2.  **Hero Section:**
    - **Left:** H1 "Wujudkan Sekolah Digital dalam satu klik", Subtitle, Button Primary ("Jadwalkan Demo"), Button Secondary ("Hubungi Kami").
    - **Right:** Ilustrasi maskot kucing dengan hoodie memegang tablet & laptop.

3.  **Client/Trust Section:**
    - Label: "Dipercaya oleh berbagai sekolah..."
    - Grid logo mitra (Musano, Yakesma, dll).

4.  **Product Section:**
    - Title: "Produk Kami".
    - 4 Placeholder Cards (abu-abu) dalam grid horizontal.
    - Floating Action: Garis panah halus menuju tombol kanan "Butuh Aplikasi Kustom?".

5.  **Mid-page CTA:**
    - Background: Beige/Light Orange.
    - Content: H2 "Siap Beralih ke Sekolah Digital?", Subtext, Button "Jadwalkan Demo".

6.  **Contact/Footer Section:**
    - **Left (Info):** Title "Hubungi Kami", Deskripsi, Email (`info@nafaarts.com`), Phone.
    - **Right (Form):** Form grid kompleks (Nama, Email, Telp, Alamat, Kota, Provinsi, Negara, Perusahaan, Zip, Fax, Pesan, Upload Lampiran, Captcha, Tombol Kirim).
