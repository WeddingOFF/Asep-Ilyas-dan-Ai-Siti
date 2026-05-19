// 1. FUNGSI UTAMA: Buka Undangan & Auto Scroll ke Couple
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    // Menjalankan animasi gerbang membelah
    if (cover) {
        cover.classList.add('hidden');
    }

    // Membuka kuncian scroll pada body halaman
    document.body.classList.add('buka-scroll');

    // Memutar musik latar belakang
    if (musik) {
        musik.play().catch(err => console.log("Musik aktif setelah interaksi user"));
    }

    // Mengarahkan layar secara smooth tepat ke Section Couple setelah gerbang terbuka
    setTimeout(() => {
        const target = document.getElementById('couple');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600); // Delay 0.6 detik disesuaikan dengan transisi gerbang
}

// 2. SENSOR ANIMASI BARU: Timbul Per Elemen (Fade In Up) saat Di-scroll
document.addEventListener("DOMContentLoaded", function () {
    
    const opsiSensor = {
        threshold: 0.1 // Animasi mulai jalan saat 10% bagian elemen masuk layar HP
    };

    const callbackAnimasi = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Mengubah elemen .fade-up menjadi .visible agar memicu CSS baru
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(callbackAnimasi, opsiSensor);

    // Otomatis mengawasi semua elemen teks/gambar yang memiliki class 'fade-up'
    const elemenAnimasi = document.querySelectorAll('.fade-up');
    elemenAnimasi.forEach(el => {
        observer.observe(el);
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




<script>
  // Membuat pengamat (Observer) untuk melihat kapan elemen muncul di layar
  const observerFadeUp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Jika elemen masuk ke dalam layar HP/Laptop
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Tambahkan kelas untuk memicu animasi
      }
    });
  }, {
    threshold: 0.1 // Animasi dimulai saat 10% bagian elemen sudah terlihat di layar
  });

  // Terapkan observer ini ke semua elemen yang memiliki kelas 'fade-up'
  document.querySelectorAll('.fade-up').forEach((el) => {
    observerFadeUp.observe(el);
  });
</script>

