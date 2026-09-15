const teks = "M.R AL";
let index = 0;
const elemen = document.getElementById("nama-ketik");

function ketikNama() {
  if (index < teks.length) {
    elemen.innerHTML += teks.charAt(index);
    index++;
    setTimeout(ketikNama, 200); // Kecepatan mengetik per huruf (200ms)
  } else {
    // Opsional: Tunggu 3 detik lalu mengulang dari awal
    setTimeout(() => {
      elemen.innerHTML = "";
      index = 0;
      ketikNama();
    }, 3000);
  }
}

// Jalankan fungsi setelah seluruh halaman dimuat
window.addEventListener("DOMContentLoaded", ketikNama);