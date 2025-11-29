class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background-color: rgba(248, 244, 233, 0.95);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #1A1A1A;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    font-family: 'Montserrat', sans-serif;
                    font-weight: 500;
                    color: #1A1A1A;
                    text-decoration: none;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #C6A769;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #C6A769;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #1A1A1A;
                }
                
                .mobile-menu {
                    display: none;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 2rem;
                    background-color: rgba(248, 244, 233, 0.98);
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                }
                
                .mobile-menu a {
                    font-family: 'Montserrat', sans-serif;
                    color: #1A1A1A;
                    text-decoration: none;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .mobile-menu.active {
                        display: flex;
                    }
                }
            </style>
            
            <div class="container">
                <a href="/" class="logo" style="text-decoration: none;">Harry's Velvet Brew</a>
<nav class="nav-links">
                    <a href="/">Home</a>
                    <a href="/#menu">Menu</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="/#reviews">Reviews</a>
                    <a href="/#contact">Contact</a>
</nav>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="mobile-menu">
                    <a href="/">Home</a>
                    <a href="/#menu">Menu</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="/#reviews">Reviews</a>
                    <a href="/#contact">Contact</a>
</div>
            </div>
        `;
        
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');
        
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        // Close mobile menu when clicking on a link
        const allLinks = this.shadowRoot.querySelectorAll('nav a, .mobile-menu a');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileBtn.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });

        // Smooth scroll for anchor links
        allLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('/#')) {
                    e.preventDefault();
                    const targetId = href.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
// Change navbar style on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                this.style.backgroundColor = 'rgba(248, 244, 233, 0.98)';
            } else {
                this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
                this.style.backgroundColor = 'rgba(248, 244, 233, 0.95)';
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);