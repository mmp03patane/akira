document.addEventListener('DOMContentLoaded', function() {
    // Pricing card toggles
    const toggleButtons = document.querySelectorAll('.toggle-features');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const featuresList = this.nextElementSibling;
            
            if (featuresList.classList.contains('hidden')) {
                featuresList.classList.remove('hidden');
                featuresList.classList.add('visible');
                this.textContent = 'Hide Features';
            } else {
                featuresList.classList.add('hidden');
                featuresList.classList.remove('visible');
                this.textContent = 'Show Features';
            }
        });
    });

    // FAQ toggles
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            item.classList.toggle('active');
        });
    });
});