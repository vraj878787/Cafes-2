class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #1A1A1A;
                    color: #F8F4E9;
                    padding: 4rem 0 2rem;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 3rem;
                    margin-bottom: 3rem;
                }
                
                .footer-logo {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 700;
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: #F8F4E9;
                }
                
                .footer-about p {
                    margin-bottom: 1.5rem;
                    opacity: 0.8;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: rgba(248, 244, 233, 0.1);
                    color: #F8F4E9;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background-color: #C6A769;
                    color: #1A1A1A;
                }
                
                .footer-heading {
                    font-family: 'Cormorant Garamond', serif;
                    font-weight: 600;
                    font-size: 1.25rem;
                    margin-bottom: 1.5rem;
                    color: #F8F4E9;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-links a {
                    color: rgba(248, 244, 233, 0.8);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #C6A769;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(248, 244, 233, 0.1);
                    padding-top: 2rem;
                    text-align: center;
                    opacity: 0.7;
                }
                
                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="container">
                <div class="footer-content">
                    <div class="footer-about">
                        <div class="footer-logo">Harry's Velvet Brew</div>
                        <p>A family-run café known for homemade meals, freshly brewed tea, and a warm ambience that feels like home.</p>
                        <div class="social-links">
                            <a href="#"><i data-feather="instagram"></i></a>
                            <a href="#"><i data-feather="facebook"></i></a>
                            <a href="#"><i data-feather="twitter"></i></a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Quick Links</h3>
                        <div class="footer-links">
                            <a href="#home">Home</a>
                            <a href="#menu">Menu</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#reviews">Reviews</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Opening Hours</h3>
                        <div class="footer-links">
                            <span>Monday - Friday: 7:30 AM - 7:00 PM</span>
                            <span>Saturday - Sunday: 8:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Contact</h3>
                        <div class="footer-links">
                            <span>123 Brew Street, London</span>
                            <span>SW1A 1AA</span>
                            <span>+44 20 7123 4567</span>
                            <span>hello@harrysvelvetbrew.com</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; ${new Date().getFullYear()} Harry's Velvet Brew Haven. All rights reserved.</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);