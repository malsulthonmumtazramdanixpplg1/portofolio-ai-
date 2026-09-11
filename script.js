// 1. Fitur Toggle Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Ubah ikon tombol
    if (document.body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});

// 2. Handling Form Submit (Contoh Notifikasi)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman
    alert('Pesan Anda telah berhasil dikirim!');
    contactForm.reset(); // Reset isi form
});