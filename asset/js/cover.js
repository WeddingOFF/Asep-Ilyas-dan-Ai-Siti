function bukaUndangan() {
  // 1. Ambil elemen-elemen yang dibutuhkan
  const coverSection = document.querySelector('.cover-section');
  const body = document.body;
  const audio = document.getElementById('musikUndangan'); // Pastikan ID di HTML sama!

  // 2. Sembunyikan cover (animasi gerbang)
  if (coverSection) {
    coverSection.classList.add('hidden');
  }

  // 3. Aktifkan scroll
  body.classList.add('buka-scroll');

  // 4. Putar Musik (music.mp3)
  if (audio) {
    // Kita paksa volume ke 100% dan putar
    audio.volume = 1.0; 
    audio.play().then(() => {
      console.log("Musik berhasil diputar!");
    }).catch(error => {
      console.error("Musik gagal diputar karena kebijakan browser: ", error);
    });
  }

  // 5. Geser ke Section Ayat dengan jeda sedikit
  setTimeout(() => {
    const sectionAyat = document.getElementById('ayat'); 
    if (sectionAyat) {
      sectionAyat.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 600); // Jeda 0.6 detik
}

}


/* =========================================
   SECTION COUPLE (BACKGROUND & GLOW PUTIH)
========================================= */
.couple-section {
  background-color: #0b132b; /* Biru Navy Asli */
  color: #ffffff;
  position: relative;
  padding: 5rem 2rem;
  overflow: hidden;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  /* Persiapan untuk memastikan konten muat di 1 layar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh; 
}

/* Efek Cahaya Putih di Tengah */
.couple-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 65%);
  z-index: 0;
  pointer-events: none;
}

.couple-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

/* =========================================
   TYPOGRAPHY (BISMILLAH & SALAM EMAS)
========================================= */
.bismillah {
  font-size: 2.2rem;
  margin-bottom: 1.5rem; /* Jarak diperlebar */
  font-weight: 500;
  color: #ffd700; /* Warna Emas */
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.6); /* Glow Emas */
  display: inline-block;
  
  /* Persiapan Animasi Typing */
  clip-path: inset(0 100% 0 0); /* Menyembunyikan teks ke kiri */
}

.salam {
  font-size: 1.5rem;
  margin-bottom: 1.5rem; /* Jarak diperlebar */
  font-weight: normal;
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
  opacity: 0; /* Disembunyikan dulu */
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 750px;
  margin: 0 auto 3rem;
  color: #cbd5e1;
  opacity: 0; /* Disembunyikan dulu */
}

/* =========================================
   LAYOUT PENGANTIN (ZIG-ZAG DIPAKSA)
========================================= */
.couple-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
  width: 100%;
}

.couple-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  opacity: 0; /* Disembunyikan dulu */
}

/* Pria (Kiri) */
.couple-card.groom {
  flex-direction: row;
  text-align: left;
}

/* Wanita (Kanan) */
.couple-card.bride {
  flex-direction: row-reverse;
  text-align: right;
}

/* =========================================
   FOTO & FIGURA EMAS BERCAHAYA (TANPA BUNGA)
========================================= */
.couple-image {
  width: 180px;
  height: 180px;
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.couple-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 50%;
  border: 4px solid #ffd700; /* Figura Emas */
  box-shadow: 0 0 25px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 215, 0, 0.3); /* Glow Luar Dalam */
}

.couple-info {
  flex: 1;
  max-width: 250px; /* Batasi lebar teks agar tidak menekan foto */
}

.couple-info h2 {
  font-size: 2.2rem;
  margin: 0 0 0.2rem;
  color: #ffffff;
  font-family: Georgia, serif;
}

.couple-info p, .couple-info span {
  margin: 0 0 0.5rem;
  color: #e2e8f0;
  font-size: 1rem;
}

/* =========================================
   KOTAK WAKTU (DIPAKSA 1 BARIS)
========================================= */
.countdown-section {
  margin-top: 1rem;
  opacity: 0; /* Disembunyikan dulu */
}

.countdown-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap; /* PAKSA KESAMPING, JANGAN TURUN */
  gap: 15px;
}

.time-box {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-top: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  padding: 1rem;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3); 
}

.time-box h2 {
  margin: 0;
  font-size: 2rem;
  color: #ffd700; 
  font-family: Georgia, serif;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.time-box span {
  font-size: 0.8rem;
  color: #ffffff;
}

/* =========================================
   ANIMASI URUTAN TAMPIL (DIPICU CLASS .muncul)
========================================= */

/* 1. Bismillah: Animasi Mengetik */
#couple.muncul .bismillah {
  animation: typeReveal 1.5s steps(30, end) forwards;
}

/* 2. Salam & Intro: Muncul Perlahan dari bawah */
#couple.muncul .salam {
  animation: fadeUp 1s ease forwards 1s; /* Jeda 1 detik setelah Bismillah */
}
#couple.muncul .intro-text {
  animation: fadeUp 1s ease forwards 1.5s;
}

/* 3. Pria: Smooth Fade In */
#couple.muncul .couple-card.groom {
  animation: smoothFade 1.5s ease forwards 2s;
}

/* 4. Wanita: Smooth Fade In */
#couple.muncul .couple-card.bride {
  animation: smoothFade 1.5s ease forwards 2.8s;
}

/* 5. Kotak Waktu: Muncul Terakhir */
#couple.muncul .countdown-section {
  animation: fadeUp 1.5s ease forwards 3.6s;
}

/* Keyframes Animasi */
@keyframes typeReveal {
  to { clip-path: inset(0 0 0 0); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes smoothFade {
  from { opacity: 0; transform: scale(0.9); filter: blur(3px); }
  to { opacity: 1; transform: scale(1); filter: blur(0); }
}


/* =========================================
   PAKSA SUPPORT HP (TETAP MENYAMPING & PAS LAYAR)
========================================= */
@media (max-width: 768px) {
  .couple-section {
    padding: 2rem 1rem; /* Kurangi padding agar tidak perlu di-scroll jauh */
  }

  .bismillah { font-size: 1.6rem; margin-bottom: 0.8rem; }
  .salam { font-size: 1.2rem; margin-bottom: 0.8rem; }
  .intro-text { font-size: 0.85rem; margin-bottom: 1.5rem; }

  .couple-wrapper { gap: 1.2rem; margin-bottom: 1.5rem; }

  /* TETAP MENYAMPING! Teks di samping foto */
  .couple-card.groom, .couple-card.bride {
    flex-direction: row !important; /* Paksa tetap baris */
    gap: 1rem;
  }
  
  /* Karena menyamping, foto harus dikecilkan agar teks muat */
  .couple-image {
    width: 100px;
    height: 100px;
    border-width: 3px;
  }

  .couple-info {
    max-width: 60%; /* Beri ruang agar teks tidak tumpah */
  }

  .couple-info h2 { font-size: 1.4rem; }
  .couple-info p, .couple-info span { font-size: 0.8rem; }

  /* KOTAK WAKTU: Tetap 3/4 kolom ke samping, perkecil ukuran box */
  .countdown-wrapper { gap: 8px; }
  .time-box {
    width: 65px;
    height: 70px;
    padding: 0.5rem;
  }
  .time-box h2 { font-size: 1.3rem; }
  .time-box span { font-size: 0.65rem; }
}

