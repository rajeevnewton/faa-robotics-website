<template>
  <footer class="footer-section">
    <!-- Main Footer Content -->
    <div class="footer-main">
      <div class="footer-container">
        <!-- Column 1: Logo & Tagline -->
        <div class="footer-column footer-branding">
          <div class="footer-logo">
            <img src="/assets/Logo.png" alt="FAA Robotics Logo" class="footer-logo-img" />
            <div>
              <h3 class="logo-text">FAA ROBOTICS</h3>
              <p class="footer-tagline">Futurize. Activate. Assemble.</p>
            </div>
          </div>
          <a href="/about#join-mission" class="footer-cta-button">
            Join Us <i class="fas fa-arrow-right"></i>
          </a>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-column footer-links">
          <h4 class="footer-column-title">Quick Links</h4>
          <ul class="footer-nav-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/store">Store</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Column 3: Connect & Contact -->
        <div class="footer-column footer-connect">
          <h4 class="footer-column-title">Connect With Us</h4>
          
          <div class="social-media">
            <a href="https://www.facebook.com/faarobotics" target="_blank" rel="noopener" class="social-icon" title="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/final_avengers?igsh=MXhheXQ2MXhoYmdraw==" target="_blank" rel="noopener" class="social-icon" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" rel="noopener" class="social-icon" title="YouTube">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="https://t.me/faa_robotics" target="_blank" rel="noopener" class="social-icon" title="Telegram">
              <i class="fab fa-telegram"></i>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919490871276" target="_blank" rel="noopener" class="social-icon" title="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>

          <div class="footer-contact-info">
            <p class="contact-item">
              <i class="fas fa-envelope"></i>
              <a href="mailto:finalavengersacademy@gmail.com">finalavengersacademy@gmail.com</a>
            </p>
            <p class="contact-item">
              <i class="fas fa-phone"></i>
              <a href="tel:+919347206123">+91  9347206123</a>
            </p>
            <p class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              Vijayawada, AP, India
            </p>
          </div>
        </div>

        <!-- Column 4: Office Info -->
        <div class="footer-column footer-office">
          <h4 class="footer-column-title">Office Info</h4>
          
          <div class="office-info">
            <p class="office-detail"><strong>FAA Robotics Pvt. Ltd.</strong></p>
            <p class="office-detail">Vijayawada, AP, India</p>
          </div>

          <div class="office-hours">
            <p class="office-detail"><strong>Timings</strong></p>
            <p class="office-detail">Mon - Sat: 10 AM - 5 PM</p>
            <p class="office-detail">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Partners Section -->
    <div class="partners-section">
      <h4 class="partners-title">Our Trusted Partners</h4>
      <div class="partners-scroll">
        <div class="partner-item">
          <img src="/assets/partners/bnb.png" alt="BNB" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/ca.png" alt="CA" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/erdc solution.png" alt="ERDC Solution" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/puma.png" alt="Puma" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/sadbhav events.png" alt="Sadbhav Events" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/sky race.png" alt="Sky Race" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/sri.png" alt="Sri" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/tribel picks.png" alt="Tribel Picks" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/vijaywada sky watchers.png" alt="Vijayawada Sky Watchers" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/young brains.png" alt="Young Brains" />
        </div>
        <div class="partner-item">
          <img src="/assets/partners/zyrodev.png" alt="Zyrodev" />
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p class="footer-copyright">&copy; 2024 FAA Robotics. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* ================================
   FOOTER
   ================================ */
.footer-section {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: #ffffff;
  padding: 4rem 2rem 2rem;
  border-top: 3px solid #00bfff;
  position: relative;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 191, 255, 0.02) 1px, transparent 1px),
    linear-gradient(rgba(0, 191, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1.2fr 0.8fr;
  gap: 3rem;
  position: relative;
  z-index: 1;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-branding {
  gap: 1.5rem;
}

.footer-logo {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer-logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}

.logo-badge {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00bfff 0%, #ffb300 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.8rem;
  color: #ffffff;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0, 191, 255, 0.3);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 900;
  color: #ffb300;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: #ffb300;
  font-style: italic;
  margin: 0.25rem 0 0 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

/* ================================
   PARTNERS SECTION
   ================================ */
.partners-section {
  padding: 2rem 0;
  border-top: 1px solid rgba(0, 191, 255, 0.2);
  border-bottom: 1px solid rgba(0, 191, 255, 0.2);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.partners-title {
  font-size: 1rem;
  font-weight: 700;
  color: #ffb300;
  margin: 0 auto 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.partners-scroll {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.partner-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 0.8rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 191, 255, 0.2);
  height: 60px;
  min-width: 100px;
}

.partner-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 191, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 191, 255, 0.2);
}

.partner-item img {
  max-width: 100%;
  max-height: 40px;
  object-fit: contain;
  filter: brightness(0.95);
  transition: filter 0.3s ease;
}

.partner-item:hover img {
  filter: brightness(1.1);
}

.footer-column-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffb300;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  border-bottom: 2px solid #00bfff;
  padding-bottom: 0.5rem;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-nav-list li {
  margin: 0;
}

.footer-nav-list a {
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-nav-list a:hover {
  color: #00bfff;
  padding-left: 8px;
}

.social-media {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 191, 255, 0.15);
  border: 1.5px solid #00bfff;
  border-radius: 50%;
  color: #00bfff;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  text-decoration: none;
}

.social-icon:hover {
  background: #00bfff;
  color: #000000;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 191, 255, 0.4);
}

.footer-contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d1d5db;
  margin: 0;
  font-size: 0.95rem;
}

.contact-item i {
  color: #00bfff;
  min-width: 20px;
}

.contact-item a {
  color: #d1d5db;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #ffb300;
}

.office-info,
.office-hours {
  margin-bottom: 0.8rem;
}

.office-detail {
  color: rgba(255, 255, 255, 0.8);
  margin: 0.3rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.footer-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  width: fit-content;
  margin-top: 0.5rem;
  margin-top: 0.5rem;
}

.footer-cta-button:hover {
  background: linear-gradient(135deg, #ffb300 0%, #ff9500 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 191, 255, 0.3);
}

.footer-bottom {
  border-top: 1px solid #333333;
  padding-top: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.footer-copyright {
  color: #9ca3af;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 1.5rem 2rem;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-column-title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }

  .logo-text {
    font-size: 1.3rem;
  }

  .footer-nav-list {
    gap: 0.6rem;
  }

  .footer-nav-list a {
    font-size: 0.9rem;
  }

  .social-media {
    gap: 0.75rem;
  }

  .social-icon {
    width: 38px;
    height: 38px;
    font-size: 1rem;
  }

  .partners-scroll {
    gap: 1rem;
  }

  .partner-item {
    height: 55px;
    min-width: 90px;
    padding: 0.6rem 1rem;
  }

  .partner-item img {
    max-height: 35px;
  }
}
</style>
