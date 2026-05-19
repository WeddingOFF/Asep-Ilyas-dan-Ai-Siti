// 1. FUNGSI UTAMA: Buka Undangan (Sesuai aslimu, dipertahankan 100%)
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    if (cover) {
        cover.classList.add('hidden');
    }

    document.body.classList.add('buka-scroll');

    if (musik) {
        musik.play().catch(err => console.log("Musik jalan setelah klik"));
    }

    setTimeout(() => {
        // Hanya ini yang diganti ke 'couple' agar pas di-klik langsung mengarah ke pengantin
        const target = document.getElementById('couple'); 
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// 2. SENSOR ANIMASI: Mengawasi elemen lama & elemen baru
document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // SENSOR LAMA (DIPERTAHANKAN 100% AGAR WEB LAMA TIDAK ERROR)
    // ==========================================
    const opsiSensor = {
        threshold: 0.15 
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, opsiSensor);

    const targets = ['couple', 'event'];
    
    targets.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
        }
    });

    // ==========================================
    // SENSOR BARU (KHUSUS UNTUK ANIMASI TIMBUL DARI BAWAH .fade-up)
    // ==========================================
    const observerBaru = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Memicu CSS fade-up kita
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-up').forEach((el) => {
        observerBaru.observe(el);
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








  // Fungsi untuk mengganti status 'active' pada navigasi bawah
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Menghapus kelas 'active' dari semua menu
      navItems.forEach(nav => nav.classList.remove('active'));
      // Menambahkan kelas 'active' pada menu yang sedang diklik
      this.classList.add('active');
    });
  });





