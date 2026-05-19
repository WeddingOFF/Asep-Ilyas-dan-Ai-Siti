// ==========================================
// 1. FUNGSI UTAMA: BUKA UNDANGAN (Asli milikmu)
// ==========================================
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    // Sembunyikan cover
    if (cover) {
        cover.classList.add('hidden');
        // Fitur darurat: memaksa cover hilang jika class .hidden tidak mempan
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
// 2. SEMUA SENSOR ANIMASI & NAVIGASI
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- A. SENSOR LAMA (Dipertahankan 100% agar web tidak error) ---
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

    // --- B. SENSOR BARU (Khusus efek fade-up dari bawah ke atas) ---
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

    // --- C. NAVIGASI BAWAH (Efek menyala saat menu diklik) ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Hapus status aktif dari semua menu
            navItems.forEach(nav => nav.classList.remove('active'));
            // Tambahkan status aktif ke menu yang barusan diklik
            this.classList.add('active');
        });
    });

});


  // Fungsi untuk mengambil nama tamu dari URL (Link)
  function getGuestName() {
    const urlParams = new URLSearchParams(window.location.search);
    let guest = urlParams.get('to'); // Mengambil teks setelah '?to='
    
    if (guest) {
      // Mengganti tanda plus (+) atau %20 dengan spasi biasa
      guest = decodeURIComponent(guest.replace(/\+/g, ' '));
      // Memasukkan nama tamu ke dalam HTML
      document.getElementById('guest-name').innerText = guest;
    } else {
      // Nama default jika link dibuka tanpa nama tamu khusus
      document.getElementById('guest-name').innerText = "Nama Tamu";
    }
  }

  // Jalankan fungsi saat halaman web selesai dimuat
  window.addEventListener('DOMContentLoaded', getGuestName);
}
}








 
