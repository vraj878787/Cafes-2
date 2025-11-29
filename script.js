document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Gallery lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const lightbox = document.createElement('div');
            lightbox.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
            lightbox.innerHTML = `
                <div class="relative max-w-4xl w-full">
                    <img src="${imgSrc}" alt="" class="w-full h-auto max-h-[90vh] object-contain">
                    <button class="absolute -top-12 right-0 text-white hover:text-gold transition-colors">
                        <i data-feather="x" class="w-8 h-8"></i>
                    </button>
                </div>
            `;
            document.body.appendChild(lightbox);
            feather.replace();
            
            const closeBtn = lightbox.querySelector('button');
            closeBtn.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
    
    // Mobile menu toggle (handled in navbar component)
});