// 1. Fungsi Utama (Harus di luar agar terbaca tombol)
function bukaUndangan() {
    const cover = document.querySelector('.cover-section');
    const musik = document.getElementById('musikUndangan');

    if (cover) {
        cover.classList.add('hidden');
    }

    document.body.classList.add('buka-scroll');

    if (musik) {
        musik.play().catch(err => console.log("Musik diputar setelah interaksi"));
    }

    setTimeout(() => {
        const target = document.getElementById('ayat');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// 2. Sensor Animasi untuk Section Couple
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('muncul');
            }
        });
    }, { threshold: 0.15 });

    const targetCouple = document.getElementById('couple');
    if (targetCouple) {
        observer.observe(targetCouple);
    }
});
