
  function bukaUndangan() {
    // 1. Cari elemen cover berdasarkan class-nya
    const coverSection = document.querySelector('.cover-section');
    
    // 2. Jika elemen cover ditemukan, tambahkan class 'hidden' untuk memicu animasi gerbang terbuka
    if (coverSection) {
      coverSection.classList.add('hidden');
    }

    // 3. Tambahkan class 'buka-scroll' ke tag <body> untuk mengaktifkan kembali fungsi scroll halaman
    document.body.classList.add('buka-scroll');


    function bukaUndangan() {
  const coverSection = document.querySelector('.cover-section');
  const musik = document.getElementById('musikUndangan'); // Ambil elemen musik

  if (coverSection) {
    coverSection.classList.add('hidden');
  }

  document.body.classList.add('buka-scroll');

    }

  }

  // MULAI PUTAR MUSIK
  if (musik) {
    musik.play();
  }

  setTimeout(() => {
    const sectionAyat = document.querySelector('#ayat'); 
    if (sectionAyat) {
      sectionAyat.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, 500); 
}
    // --- TIPS AUDIO ---
    // Jika nanti kamu mau menambahkan musik latar otomatis berputar pas gerbang kebuka,
    // kamu tinggal taruh kode pemutar audionya di bawah sini, contoh:
    // let audio = document.getElementById("myAudio");
    // audio.play();
  }

