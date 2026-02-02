<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          Get in <span class="gradient-text">Touch</span>
        </h1>
        <p class="hero-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-main-section">
      <div class="section-pattern"></div>
      <div class="contact-container">
        <!-- Left Side: Contact Form -->
        <div class="form-wrapper">
          <div class="form-card">
            <div class="form-header">
              <i class="fas fa-envelope form-icon"></i>
              <h2 class="form-title">Send Us a Message</h2>
              <p class="form-description">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <!-- Success/Error Messages -->
            <div v-if="showSuccess" class="alert alert-success">
              <i class="fas fa-check-circle"></i>
              <span>Message sent successfully! We'll get back to you soon.</span>
            </div>

            <div v-if="showError" class="alert alert-error">
              <i class="fas fa-exclamation-circle"></i>
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">
                  <i class="fas fa-user"></i>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">
                  <i class="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">
                  <i class="fas fa-phone"></i>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  class="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div class="form-group">
                <label for="query" class="form-label">
                  <i class="fas fa-comment-dots"></i>
                  Your Message
                </label>
                <textarea
                  id="query"
                  v-model="formData.query"
                  class="form-textarea"
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="submit-btn"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">
                  <i class="fas fa-paper-plane"></i>
                  Send Message
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- Right Side: Info Cards -->
        <div class="info-wrapper">
          <!-- Connect With Us -->
          <div class="info-card social-card">
            <h3 class="info-card-title">
              <i class="fas fa-share-alt"></i>
              Connect With Us
            </h3>
            
            <div class="social-grid">
              <a href="https://www.facebook.com/faarobotics" target="_blank" class="social-link facebook">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/final_avengers?igsh=MXhheXQ2MXhoYmdraw==" target="_blank" class="social-link instagram">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="social-link youtube">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a href="https://t.me/faa_robotics" target="_blank" class="social-link telegram">
                <i class="fab fa-telegram"></i>
                <span>Telegram</span>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B919490871276" target="_blank" class="social-link whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
              <a href="https://www.whatsapp.com/channel/0029VaxBItr3GJP1vvedFX0h" target="_blank" class="social-link whatsapp-channel">
                <i class="fab fa-whatsapp"></i>
                <span>WhatsApp Channel</span>
              </a>
            </div>
          </div>

          <!-- Follow Our Leaders -->
          <div class="info-card leaders-card">
            <h3 class="info-card-title">
              <i class="fas fa-users"></i>
              Follow our Founder and Director
            </h3>
            
            <div class="leader-links">
              <a href="https://www.instagram.com/urs_sushant23?igsh=OXZlb3VtenQyenlk" target="_blank" class="leader-link instagram-link">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              
              <a href="https://youtube.com/@raj_captain?si=1kV3AiY0RPqMyM8Z" target="_blank" class="leader-link youtube-link">
                <i class="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              
              <a href="mailto:rajeevnewton@gmail.com" class="leader-link email-link">
                <i class="fas fa-envelope"></i>
                <span>rajeevnewton@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  query: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  showSuccess.value = false
  showError.value = false

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    })

    if (response.ok) {
      showSuccess.value = true
      formData.value = {
        name: '',
        email: '',
        phone: '',
        query: ''
      }
      
      setTimeout(() => {
        showSuccess.value = false
      }, 5000)
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    showError.value = true
    errorMessage.value = 'Failed to send message. Please try again or contact us directly.'
    
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  width: 100%;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  min-height: 100vh;
}

/* ================================
   HERO SECTION
   ================================ */
.contact-hero {
  position: relative;
  padding: 8rem 2rem 4rem 2rem;
  overflow: hidden;
  text-align: center;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.02) 2px,
      rgba(102, 126, 234, 0.02) 4px
    );
  pointer-events: none;
  animation: patternMove 20s ease-in-out infinite;
}

@keyframes patternMove {
  0%, 100% { transform: translate(0, 0); opacity: 0.5; }
  50% { transform: translate(30px, 30px); opacity: 0.8; }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 2px;
}

.gradient-text {
  background: linear-gradient(135deg, #00ffff 0%, #ffd700 50%, #667eea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
}

/* ================================
   CONTACT MAIN SECTION
   ================================ */
.contact-main-section {
  position: relative;
  padding: 2rem;
  overflow: hidden;
}

.section-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 30% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.contact-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  position: relative;
  z-index: 1;
}

/* ================================
   FORM WRAPPER & CARD
   ================================ */
.form-wrapper {
  width: 100%;
}

.form-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 255, 255, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(0, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.form-card:hover {
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.6),
    0 0 50px rgba(0, 255, 255, 0.2);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #00ffff, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  display: block;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.form-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ================================
   ALERTS
   ================================ */
.alert {
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  animation: slideDown 0.5s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.alert-success {
  background: rgba(0, 255, 127, 0.1);
  border: 2px solid rgba(0, 255, 127, 0.3);
  color: #00ff7f;
}

.alert-success i {
  font-size: 1.25rem;
}

.alert-error {
  background: rgba(255, 69, 58, 0.1);
  border: 2px solid rgba(255, 69, 58, 0.3);
  color: #ff453a;
}

.alert-error i {
  font-size: 1.25rem;
}

/* ================================
   FORM FIELDS
   ================================ */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.form-label i {
  color: #00ffff;
  font-size: 0.95rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.9rem 1.1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.95rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-input:focus,
.form-textarea:focus {
  background: rgba(255, 255, 255, 0.08);
  border-color: #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* ================================
   SUBMIT BUTTON
   ================================ */
.submit-btn {
  width: 100%;
  padding: 1.1rem 2rem;
  background: linear-gradient(135deg, #00ffff 0%, #ffd700 100%);
  border: none;
  border-radius: 50px;
  color: #0a0e27;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 255, 255, 0.5);
  background: linear-gradient(135deg, #ffd700 0%, #00ffff 100%);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-btn i {
  font-size: 1.1rem;
}

/* ================================
   INFO WRAPPER & CARDS
   ================================ */
.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 15px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(102, 126, 234, 0.1);
  transition: all 0.4s ease;
}

.info-card:hover {
  border-color: rgba(102, 126, 234, 0.4);
  transform: translateY(-3px);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(102, 126, 234, 0.2);
}

.info-card-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.info-card-title i {
  background: linear-gradient(135deg, #00ffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.3rem;
}

/* ================================
   SOCIAL GRID
   ================================ */
.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid;
  font-size: 0.85rem;
  font-weight: 600;
}

.social-link i {
  font-size: 1.5rem;
}

.social-link.facebook {
  background: rgba(24, 119, 242, 0.1);
  border-color: rgba(24, 119, 242, 0.3);
  color: #1877f2;
}

.social-link.facebook:hover {
  background: rgba(24, 119, 242, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.3);
}

.social-link.instagram {
  background: rgba(225, 48, 108, 0.1);
  border-color: rgba(225, 48, 108, 0.3);
  color: #e1306c;
}

.social-link.instagram:hover {
  background: rgba(225, 48, 108, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(225, 48, 108, 0.3);
}

.social-link.youtube {
  background: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.3);
  color: #ff0000;
}

.social-link.youtube:hover {
  background: rgba(255, 0, 0, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.3);
}

.social-link.telegram {
  background: rgba(0, 136, 204, 0.1);
  border-color: rgba(0, 136, 204, 0.3);
  color: #0088cc;
}

.social-link.telegram:hover {
  background: rgba(0, 136, 204, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 136, 204, 0.3);
}

.social-link.whatsapp {
  background: rgba(37, 211, 102, 0.1);
  border-color: rgba(37, 211, 102, 0.3);
  color: #25d366;
}

.social-link.whatsapp:hover {
  background: rgba(37, 211, 102, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.social-link.whatsapp-channel {
  background: rgba(37, 211, 102, 0.1);
  border-color: rgba(37, 211, 102, 0.3);
  color: #25d366;
  position: relative;
}

.social-link.whatsapp-channel:hover {
  background: rgba(37, 211, 102, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
}

.social-link.whatsapp-channel::after {
  content: 'CHANNEL';
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ffb300;
  color: #000000;
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

/* ================================
   LEADERS CARD
   ================================ */
.leaders-card {
  border-color: rgba(255, 215, 0, 0.2);
}

.leaders-card:hover {
  border-color: rgba(255, 215, 0, 0.4);
}

.leader-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.leader-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid;
  font-size: 0.95rem;
  font-weight: 600;
}

.leader-link i {
  font-size: 1.5rem;
}

.leader-link.instagram-link {
  background: rgba(225, 48, 108, 0.1);
  border-color: rgba(225, 48, 108, 0.3);
  color: #e1306c;
}

.leader-link.instagram-link:hover {
  background: rgba(225, 48, 108, 0.2);
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(225, 48, 108, 0.4);
}

.leader-link.youtube-link {
  background: rgba(255, 0, 0, 0.1);
  border-color: rgba(255, 0, 0, 0.3);
  color: #ff0000;
}

.leader-link.youtube-link:hover {
  background: rgba(255, 0, 0, 0.2);
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(255, 0, 0, 0.4);
}

.leader-link.email-link {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
  color: #00ffff;
}

.leader-link.email-link:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: translateX(5px);
  box-shadow: 0 8px 20px rgba(0, 255, 255, 0.4);
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1200px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .social-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .contact-main-section {
    padding: 2rem 1rem;
  }

  .form-card,
  .info-card {
    padding: 1.5rem;
  }

  .form-header {
    margin-bottom: 1.5rem;
  }

  .form-icon {
    font-size: 2rem;
  }

  .form-title {
    font-size: 1.5rem;
  }

  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .leader-avatar {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .social-grid {
    grid-template-columns: 1fr;
  }

  .leader-email {
    font-size: 0.75rem;
  }
}
</style>
