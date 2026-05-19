// ==========================================
// 1. FUNGSI UTAMA: BUKA UNDANGAN & PEMICU ANIMASI COUPLE
// ==========================================
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    // Sembunyikan cover
    if (cover) {
        cover.classList.add('hidden');
        setTimeout(() => { cover.style.display = 'none'; }, 800);
    }

    // Buka kunci scroll
    document.body.classList.add('buka-scroll');

    // Putar lagu
    if (musik) {
        musik.play().catch(err => console.log("Musik jalan setelah klik"));
    }

    // --- BARU: Jalankan animasi fade-up khusus di section Couple saat buka undangan ---
    const elemenCouple = document.querySelectorAll('#couple .fade-up');
    elemenCouple.forEach((el) => {
        el.classList.add('visible');
    });

    // Gulir otomatis ke bagian Pengantin (Couple)
    setTimeout(() => {
        const target = document.getElementById('couple'); 
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// ==========================================
// 2. FUNGSI NAMA TAMU (Dari URL Link)
// ==========================================
function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    let guest = urlParams.get('to'); 
    
    const guestNameElement = document.getElementById('guest-name');
    
    if (guestNameElement) {
        if (guest) {
            guest = decodeURIComponent(guest.replace(/\+/g, ' '));
            guestNameElement.innerText = guest;
        } else {
            guestNameElement.innerText = "Tamu Undangan"; 
        }
    }
}

// ==========================================
// 3. SENSOR ANIMASI UNTUK SECTION LAIN & NAVIGASI
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    
    // Panggil Fungsi Nama Tamu saat web dimuat
    getGuestName();

    // --- A. SENSOR LAMA (Tetap dipertahankan untuk '#event' dll) ---
    const opsiSensorLama = { threshold: 0.15 };
    const callbackLama = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
                observer.unobserve(entry.target);
            }
        });
    };
    const observerLama = new IntersectionObserver(callbackLama, opsiSensorLama);
    const targetsLama = ['couple', 'event', 'gift']; // ID couple tetap di sini agar sistem lamamu tidak error
    targetsLama.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observerLama.observe(element);
        }
    });

    // --- B. SENSOR SCROLL BARU (Hanya untuk elemen .fade-up yang BUKAN di dalam #couple) ---
    // Contoh: jika nanti kamu pakai kelas .fade-up di section acara, rsvp, atau gift.
    const observerBaru = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Hanya mengawasi elemen .fade-up yang berada di luar #couple
    document.querySelectorAll('section:not(#couple) .fade-up, div:not(#couple) .fade-up').forEach((el) => {
        observerBaru.observe(el);
    });

    // --- C. NAVIGASI BAWAH (Efek klik) ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

});


// Fungsi Salin Teks Rekening
function copyText(teks) {
  navigator.clipboard.writeText(teks).then(() => {
    alert("Nomor rekening berhasil disalin: " + teks);
  }).catch(err => {
    console.error('Gagal menyalin: ', err);
  });
}
