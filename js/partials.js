async function loadPartial(selector, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadPartial('#site-header', 'partials/header.html');
    await loadPartial('#site-footer', 'partials/footer.html');

    // Init menu AFTER header is loaded
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.main-navigation');

    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
            const isExpanded = navigation.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
            document.body.style.overflow = isExpanded ? 'hidden' : '';
        });

        document.addEventListener('click', function(event) {
            const isClickInsideMenu = navigation.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            if (!isClickInsideMenu && !isClickOnToggle && navigation.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navigation.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });

        const menuLinks = navigation.querySelectorAll('a');
        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navigation.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }
});