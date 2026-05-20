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


// Mengambil data dari Firebase dan menampilkannya
onSnapshot(query(collection(db, "rsvp"), orderBy("tanggal", "desc")), (snapshot) => {
  const listUcapan = document.getElementById('list-ucapan');
  listUcapan.innerHTML = ""; // Bersihkan daftar lama agar tidak double

  snapshot.forEach((doc) => {
    const data = doc.data();
    
    // Membuat elemen kotak ucapan untuk setiap tamu
    const div = document.createElement('div');
    div.className = 'wish-item';
    div.innerHTML = `
      <div class="wish-card">
        <strong>${data.nama}</strong> 
        <span class="status-label">${data.kehadiran === 'hadir' ? '✅ Hadir' : '❌ Tidak Hadir'}</span>
        <p>${data.pesan}</p>
      </div>
    `;
    listUcapan.appendChild(div);
  });
});
