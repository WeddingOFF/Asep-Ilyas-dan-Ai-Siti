/**
 * FUNGSI UTAMA: Buka Undangan & Musik
 * Ditaruh di paling atas agar terbaca saat tombol di klik
 */
function bukaUndangan() {
    const coverSection = document.querySelector('.cover-section');
    const body = document.body;
    const audio = document.getElementById('musikUndangan');

    // Efek buka gerbang
    if (coverSection) {
        coverSection.classList.add('hidden');
    }

    // Aktifkan scroll halaman
    body.classList.add('buka-scroll');

    // Putar music.mp3
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Autoplay dicegah browser, musik akan main setelah interaksi.");
        });
    }

    // Scroll otomatis ke section ayat
    setTimeout(function() {
        const sectionAyat = document.getElementById('ayat');
        if (sectionAyat) {
            sectionAyat.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

/**
 * SENSOR ANIMASI: Menjalankan urutan animasi Couple
 * Berjalan otomatis saat halaman di scroll
 */
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Menempelkan class .muncul untuk trigger animasi CSS
                entry.target.classList.add('muncul');
                // Matikan sensor agar animasi tidak berulang
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // Targetkan ke ID couple
    const sectionCouple = document.getElementById('couple');
    if (sectionCouple) {
        observer.observe(sectionCouple);
    }
});
