// Fungsi ini harus di luar agar bisa dipanggil HTML
function bukaUndangan() {
    const coverSection = document.querySelector('.cover-section');
    const body = document.body;
    const audio = document.getElementById('musikUndangan');

    if (coverSection) {
        coverSection.classList.add('hidden');
    }

    body.classList.add('buka-scroll');

    if (audio) {
        audio.play().catch(err => console.log("Musik tertunda"));
    }

    setTimeout(() => {
        const sectionAyat = document.getElementById('ayat');
        if (sectionAyat) {
            sectionAyat.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// Sensor untuk animasi section couple
document.addEventListener("DOMContentLoaded", function () {
    const sensorCouple = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const targetCouple = document.getElementById('couple');
    if (targetCouple) {
        sensorCouple.observe(targetCouple);
    }
});
