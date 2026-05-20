  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

  // 1. Konfigurasi dari yang kamu kirim
  const firebaseConfig = {
    apiKey: "AIzaSyCXxgO0OU9k-LvRhYY7bIuhvVpY5XgMWdk",
    authDomain: "nuralam-90162.firebaseapp.com",
    projectId: "nuralam-90162",
    storageBucket: "nuralam-90162.firebasestorage.app",
    messagingSenderId: "371833786531",
    appId: "1:371833786531:web:fc49153e527ac617612f16"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 2. Fungsi Kirim RSVP
  const form = document.querySelector('.wish-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const kehadiran = document.getElementById('kehadiran').value;
    const pesan = document.getElementById('pesan').value;

    if (!nama || !kehadiran) return alert("Mohon isi nama dan status kehadiran!");

    try {
      await addDoc(collection(db, "rsvp"), {
        nama: nama,
        kehadiran: kehadiran,
        pesan: pesan,
        tanggal: new Date()
      });
      alert("Terima kasih, konfirmasi Anda berhasil dikirim!");
      form.reset(); // Mengosongkan form
    } catch (e) {
      alert("Gagal mengirim, coba lagi nanti.");
      console.error(e);
    }
  });


import { collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Mengambil data real-time
onSnapshot(collection(db, "rsvp"), (snapshot) => {
    let hadir = 0;
    let tidakHadir = 0;

    snapshot.forEach((doc) => {
        const data = doc.data();
        // Pastikan 'hadir' dan 'tidak-hadir' sama dengan value di <option> HTML-mu
        if (data.kehadiran === 'hadir') hadir++;
        else if (data.kehadiran === 'tidak-hadir') tidakHadir++;
    });

    // Update tampilan HTML
    document.getElementById('hadirCount').innerText = hadir;
    document.getElementById('tidakHadirCount').innerText = tidakHadir;
    document.getElementById('totalCount').innerText = hadir + tidakHadir;
});
