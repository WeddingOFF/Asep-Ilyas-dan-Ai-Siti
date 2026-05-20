function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    if (cover) {
        cover.classList.add('hidden');
        setTimeout(() => { cover.style.display = 'none'; }, 800);
    }

    document.body.classList.add('buka-scroll');

    if (musik) {
        musik.play().catch(err => console.log("Musik jalan setelah klik"));
    }

    // HAPUS bagian 'elemenCouple' yang dulu kita paksa muncul (requestAnimationFrame)
    // HAPUS bagian 'setTimeout' yang scrollIntoView
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
// 3. FUNGSI COUNTDOWN (HITUNG MUNDUR)
// ==========================================
function mulaiCountdown() {
    // Set target tanggal: 7 Juni 2026 Pukul 08:00:00 WIB
    const targetTanggal = new Date("Jun 7, 2026 08:00:00").getTime();

    const hitungMundur = setInterval(function() {
        const sekarang = new Date().getTime();
        const selisih = targetTanggal - sekarang;

        // Rumus matematika konversi milidetik ke waktu
        const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
        const detik = Math.floor((selisih % (1000 * 60)) / 1000);

        // Menghubungkan ke ID di HTML kamu
        const elHari = document.getElementById("hari");
        const elJam = document.getElementById("jam");
        const elMenit = document.getElementById("menit");
        const elDetik = document.getElementById("detik");

        if(elHari) elHari.innerText = hari;
        if(elJam) elJam.innerText = jam;
        if(elMenit) elMenit.innerText = menit;
        if(elDetik) elDetik.innerText = detik;

        // Jika tanggal pernikahan sudah lewat/tercapai
        if (selisih < 0) {
            clearInterval(hitungMundur);
            if(elHari) elHari.innerText = "00";
            if(elJam) elJam.innerText = "00";
            if(elMenit) elMenit.innerText = "00";
            if(elDetik) elDetik.innerText = "00";
        }
    }, 1000);
}

// ==========================================
// 4. SATU WADAH UTAMA SAAT HALAMAN SELESAI DIMUAT
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    
    // --- DI SINI TEMPAT MEMANGGIL NYA ---
    getGuestName();      // Menjalankan fungsi nama tamu
    mulaiCountdown();    // Menjalankan fungsi hitung mundur angka pernikahan

    // --- A. SENSOR SCROLL LAMA (Untuk memicu efek .muncul) ---
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
    
    // PENTING: ID 'gift' sudah dimasukkan ke sini juga agar section gift otomatis bisa bergerak
    const targetsLama = ['couple', 'event', 'gift']; 
    targetsLama.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observerLama.observe(element);
        }
    });

    // --- B. SENSOR SCROLL BARU (.fade-up khusus selain section #couple) ---
    const observerBaru = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section:not(#couple) .fade-up, div:not(#couple) .fade-up').forEach((el) => {
        observerBaru.observe(el);
    });

    // --- C. NAVIGASI BAWAH BAWAAN ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

});

// ==========================================
// 5. REKENING WEDDING GIFT FUNCTION
// ==========================================
function copyText(teks) {
  navigator.clipboard.writeText(teks).then(() => {
    alert("Nomor rekening berhasil disalin: " + teks);
  }).catch(err => {
    console.error('Gagal menyalin rekening: ', err);
  });
}
