document.addEventListener('DOMContentLoaded', function () {

    // Open hero modal
    document.querySelectorAll('.open-hero-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('hero-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Open starter modal
    document.querySelectorAll('.open-starter-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('starter-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Open growth modal
    document.querySelectorAll('.open-growth-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('growth-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Open authority modal
    document.querySelectorAll('.open-authority-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('authority-modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close buttons
    document.getElementById('close-hero-modal').addEventListener('click', () => closeModal('hero-modal'));
    document.getElementById('close-starter-modal').addEventListener('click', () => closeModal('starter-modal'));
    document.getElementById('close-growth-modal').addEventListener('click', () => closeModal('growth-modal'));
    document.getElementById('close-authority-modal').addEventListener('click', () => closeModal('authority-modal'));

    // Close on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) closeModal(this.id);
        });
    });

    function closeModal(id) {
        document.getElementById(id).classList.remove('active');
        document.body.style.overflow = '';
    }

});