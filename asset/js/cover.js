<script>
  function bukaUndangan() {
    // 1. Cari elemen cover berdasarkan class-nya
    const coverSection = document.querySelector('.cover-section');
    
    // 2. Jika elemen cover ditemukan, tambahkan class 'hidden' untuk memicu animasi gerbang terbuka
    if (coverSection) {
      coverSection.classList.add('hidden');
    }

    // 3. Tambahkan class 'buka-scroll' ke tag <body> untuk mengaktifkan kembali fungsi scroll halaman
    document.body.classList.add('buka-scroll');
    
    // --- TIPS AUDIO ---
    // Jika nanti kamu mau menambahkan musik latar otomatis berputar pas gerbang kebuka,
    // kamu tinggal taruh kode pemutar audionya di bawah sini, contoh:
    // let audio = document.getElementById("myAudio");
    // audio.play();
  }
</script>
