// ==========================================
// 1. FUNGSI UTAMA: BUKA UNDANGAN
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

    // Gulir ke bagian Pengantin (Couple)
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
            // Mengganti tanda + / %20 dengan spasi
            guest = decodeURIComponent(guest.replace(/\+/g, ' '));
            guestNameElement.innerText = guest;
        } else {
            // Default jika link tidak ada '?to='
            guestNameElement.innerText = "Tamu Undangan"; 
        }
    }
}

// ==========================================
// 3. SEMUA SENSOR ANIMASI, NAVIGASI, & INISIALISASI AWAL
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- Panggil Fungsi Nama Tamu saat web dimuat ---
    getGuestName();

    // --- A. SENSOR LAMA (Untuk '#couple' & '#event') ---
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
    const targetsLama = ['couple', 'event'];
    targetsLama.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observerLama.observe(element);
        }
    });

    // --- B. SENSOR BARU (Untuk elemen teks/gambar '.fade-up') ---
    const observerBaru = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => {
        observerBaru.observe(el);
    });

    // --- C. NAVIGASI BAWAH (Berubah warna saat diklik) ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

});
