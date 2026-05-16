// Tunggu seluruh halaman siap
document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. FUNGSI BUKA UNDANGAN (Global) ---
    window.bukaUndangan = function() {
        const coverSection = document.querySelector('.cover-section');
        const body = document.body;
        const audio = document.getElementById('musikUndangan');

        // Sembunyikan cover
        if (coverSection) {
            coverSection.classList.add('hidden');
        }

        // Aktifkan scroll body
        body.classList.add('buka-scroll');

        // Putar musik jika ada
        if (audio) {
            audio.play().catch(err => console.log("Autoplay dicegah browser"));
        }

        // Scroll otomatis ke section ayat
        setTimeout(() => {
            const sectionAyat = document.getElementById('ayat');
            if (sectionAyat) {
                sectionAyat.scrollIntoView({ behavior: 'smooth' });
            }
        }, 600);
    };

    // --- 2. SENSOR ANIMASI COUPLE ---
    const sensorCouple = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
                observer.unobserve(entry.target); // Matikan sensor setelah muncul
            }
        });
    }, { threshold: 0.15 });

    const targetCouple = document.getElementById('couple');
    if (targetCouple) {
        sensorCouple.observe(targetCouple);
    }
});
