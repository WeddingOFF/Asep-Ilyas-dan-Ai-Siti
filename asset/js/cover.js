// 1. FUNGSI UTAMA: Buka Undangan
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
        const target = document.getElementById('ayat');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }, 600);
}

// 2. SENSOR ANIMASI: Mengawasi Section Couple & Event
document.addEventListener("DOMContentLoaded", function () {
    const opsiSensor = {
        threshold: 0.15 // Animasi jalan saat 15% bagian muncul di layar
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Menambahkan class 'muncul' agar CSS bekerja
                entry.target.classList.add('muncul');
                // Berhenti mengawasi setelah muncul sekali
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, opsiSensor);

    // Daftar ID yang mau dipasang sensor animasi
    const targets = ['couple', 'event'];
    
    targets.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
        }
    });
});
