class CustomNav extends HTMLElement {
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
                    transition: all 0.3s ease;
                    background: rgba(26, 26, 26, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }
                
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                }
                
                .logo {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #F5EFE6;
                    text-decoration: none;
                }
                
                .logo span {
                    color: #D4AF37;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #F5EFE6;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #D4AF37;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #D4AF37;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #F5EFE6;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 80px;
                        left: 0;
                        right: 0;
                        background: rgba(26, 26, 26, 0.95);
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                    }
                    
                    .nav-links.active {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <div class="nav-container">
                <a href="/" class="logo">Velvet<span>Brew</span></a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="/">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#reviews">Reviews</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        `;
        
        // Initialize mobile menu toggle
        const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            feather.replace();
        });
        
        // Close mobile menu when clicking a link
        const links = this.shadowRoot.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            });
        });
        
        // Feather icons initialization
        feather.replace();
        
        // Add scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.style.boxShadow = 'none';
            }
        });
    }
}

customElements.define('custom-nav', CustomNav);

class CustomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-md shadow-soft z-50">
            <div class="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                
                <!-- Logo -->
                <a href="#" class="text-2xl font-serif font-bold text-secondary">
                    Velvet Brew Haven
                </a>

                <!-- Desktop Links -->
                <div class="hidden md:flex gap-8 text-secondary font-medium">
                    <a href="#menu" class="hover:text-accent transition">Menu</a>
                    <a href="#gallery" class="hover:text-accent transition">Gallery</a>
                    <a href="#reviews" class="hover:text-accent transition">Reviews</a>
                    <a href="#contact" class="hover:text-accent transition">Visit Us</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="navBtn" class="md:hidden">
                    <i data-feather="menu" class="w-6 h-6"></i>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobileMenu" class="hidden flex-col bg-primary text-secondary px-6 pb-6 md:hidden">
                <a href="#menu" class="py-2 hover:text-accent">Menu</a>
                <a href="#gallery" class="py-2 hover:text-accent">Gallery</a>
                <a href="#reviews" class="py-2 hover:text-accent">Reviews</a>
                <a href="#contact" class="py-2 hover:text-accent">Visit Us</a>
            </div>
        </nav>
        `;

        // Toggle mobile menu
        const btn = this.querySelector("#navBtn");
        const menu = this.querySelector("#mobileMenu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

        feather.replace();
    }
}

customElements.define("custom-nav", CustomNav);
