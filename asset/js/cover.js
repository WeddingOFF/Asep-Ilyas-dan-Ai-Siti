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
