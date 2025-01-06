// Menambahkan efek "active" pada navbar berdasarkan URL saat ini
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// Animasi validasi input untuk formulir kontak
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.style.borderColor = '#28a745'; // Hijau jika valid
        } else {
            input.style.borderColor = '#dc3545'; // Merah jika tidak valid
        }
    });
});

// Animasi scroll halus untuk tautan navigasi
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Galeri interaktif (efek klik untuk memperbesar gambar)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('gallery-overlay');
        overlay.innerHTML = `
            <div class="overlay-content">
                <h2>${item.textContent}</h2>
                <p>Deskripsi gambar ini.</p>
                <button class="close-overlay">Tutup</button>
            </div>
        `;
        document.body.appendChild(overlay);

        const closeButton = overlay.querySelector('.close-overlay');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});