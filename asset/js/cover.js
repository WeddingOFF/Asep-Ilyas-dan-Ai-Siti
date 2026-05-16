// 1. Fungsi Utama (Harus di luar agar terbaca tombol)
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    if (cover) {
        cover.classList.add('hidden');
    }

    document.body.classList.add('buka-scroll');

    if (musik) {
        musik.play().catch(err => console.log("Musik diputar setelah interaksi"));
    }

    setTimeout(() => {
        const target = document.getElementById('ayat');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// 2. Sensor Animasi untuk Section Couple
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
            }
        });
    }, { threshold: 0.15 });

    const targetCouple = document.getElementById('couple');
    if (targetCouple) {
        observer.observe(targetCouple);
    }
});


/* --- SECTION EVENT BASE --- */
.event-section {
  background-color: #0b132b; /* Biru Navy */
  color: #ffffff;
  padding: 5rem 1.5rem;
  overflow: hidden;
  text-align: center;
}

.event-content {
  max-width: 1000px;
  margin: 0 auto;
}

/* --- ANIMASI TERBIT (JUDUL & SUBJUDUL) --- */
.event-title, .event-subtitle {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease-out;
}

#event.muncul .event-title, 
#event.muncul .event-subtitle {
  opacity: 1;
  transform: translateY(0);
}

/* --- WRAPPER AKAD & RESEPSI --- */
.event-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  perspective: 1000px; /* Efek kedalaman */
}

/* --- ANIMASI GESER SAMPING (AKAD & RESEPSI) --- */
.event-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  flex: 1;
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Akad: Geser dari Kiri ke Kanan */
.card-akad {
  transform: translateX(-100px);
}

/* Resepsi: Geser dari Kanan ke Kiri */
.card-resepsi {
  transform: translateX(100px);
}

#event.muncul .card-akad,
#event.muncul .card-resepsi {
  opacity: 1;
  transform: translateX(0);
}

/* --- ANIMASI KEDIAMAN (BAWAH KE ATAS) --- */
.event-home {
  margin-top: 3rem;
  background: rgba(255, 215, 0, 0.05); /* Sedikit sentuhan emas */
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 1.5rem;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease-out 0.8s; /* Jeda sedikit agar muncul terakhir */
}

#event.muncul .event-home {
  opacity: 1;
  transform: translateY(0);
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 768px) {
  .event-wrapper {
    flex-direction: column; /* Di HP jadi atas-bawah */
    gap: 1.5rem;
  }
  
  /* Tetap geser berlawanan walau sudah vertikal */
  .card-akad { transform: translateX(-50px); }
  .card-resepsi { transform: translateX(50px); }
  
  .event-card {
    padding: 1.5rem;
  }
}
