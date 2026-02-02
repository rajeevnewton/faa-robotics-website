<template>
  <div class="corporates-page">
    <!-- Hero Header -->
    <section class="hero-header">
      <div class="hero-background">
        <div class="grid-overlay"></div>
        <div class="neon-circles">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="title-container">
          <h1 class="main-title">FOR CORPORATES</h1>
          <div class="title-glow"></div>
        </div>
        <p class="subtitle">Industrial Robotics R&D Solutions</p>
        <p class="slogan">From Concept to Reality, We Build Your Vision</p>
        <div class="hero-badge">
          <i class="fas fa-industry"></i>
          <span>Custom Solutions</span>
        </div>
      </div>

      <div class="scroll-down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- Hero Section: The Innovation Dashboard -->
    <section class="hero-wrapper">
      <div class="hero-dashboard">
        <!-- Zone 1: Live Demo Video -->
        <div class="hero-zone video-zone">
          <div class="video-container">
            <video autoplay muted loop playsinline>
              <source src="/assets/corporate/pv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="video-overlay">
              <div class="pulse-indicator"></div>
              <span>LIVE DEMO</span>
            </div>
          </div>
        </div>

        <!-- Zone 2: Engineering Details (3 Carousels) -->
        <div class="hero-zone carousel-zone">
          <!-- Carousel 1: Custom Chassis -->
          <div class="carousel-container" data-aos="fade-up">
            <div class="image-carousel" ref="carousel1">
              <img src="/assets/corporate/sqimage (1).jpg" alt="Chassis Design" class="carousel-active" />
              <img src="/assets/corporate/sqimage (2).jpg" alt="Chassis Design" />
              <img src="/assets/corporate/sqimage (3).jpg" alt="Chassis Design" />
            </div>
          </div>

          <!-- Carousel 2: 3D Printed Mechanisms -->
          <div class="carousel-container" data-aos="fade-up" data-aos-delay="100">
            <div class="image-carousel" ref="carousel2">
              <img src="/assets/corporate/sqimage (4).jpg" alt="3D Printed Parts" class="carousel-active" />
              <img src="/assets/corporate/sqimage (5).jpg" alt="3D Printed Parts" />
              <img src="/assets/corporate/sqimage (6).jpg" alt="3D Printed Parts" />
            </div>
          </div>

          <!-- Carousel 3: Electronics & PCBs -->
          <div class="carousel-container" data-aos="fade-up" data-aos-delay="200">
            <div class="image-carousel" ref="carousel3">
              <img src="/assets/corporate/sqimage (7).jpg" alt="Electronics" class="carousel-active" />
              <img src="/assets/corporate/sqimage (8).jpg" alt="Electronics" />
              <img src="/assets/corporate/sqimage (9).jpg" alt="Electronics" />
              <img src="/assets/corporate/sqimage (10).jpg" alt="Electronics" />
            </div>
          </div>
        </div>

        <!-- Zone 3: The Pitch -->
        <div class="hero-zone pitch-zone">
          <div class="pitch-content" data-aos="fade-left">
            <div class="tech-badge">
              <i class="fas fa-flask"></i>
              <span>R&D LAB</span>
            </div>
            <h1 class="pitch-headline">
              You Dream It.<br />
              <span class="gradient-text">We Engineer It.</span>
            </h1>
            <p class="pitch-subheadline">
              End-to-End Robotics R&D for Your Business
            </p>
            
            <div class="tech-specs">
              <div class="spec-item" data-aos="fade-left" data-aos-delay="100">
                <div class="spec-icon">
                  <i class="fas fa-bolt"></i>
                </div>
                <div class="spec-content">
                  <strong>In-House Fabrication</strong>
                  <span>100% Designed & Printed at FAA HQ</span>
                </div>
              </div>

              <div class="spec-item" data-aos="fade-left" data-aos-delay="200">
                <div class="spec-icon">
                  <i class="fas fa-puzzle-piece"></i>
                </div>
                <div class="spec-content">
                  <strong>Rapid Prototyping</strong>
                  <span>Concept to MVP in weeks, not months</span>
                </div>
              </div>

              <div class="spec-item" data-aos="fade-left" data-aos-delay="300">
                <div class="spec-icon">
                  <i class="fas fa-rupee-sign"></i>
                </div>
                <div class="spec-content">
                  <strong>Cost-Effective</strong>
                  <span>Solutions tailored to Indian market budgets</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919347206123?text=Hi%20FAA,%20I%20have%20a%20custom%20robotics%20requirement." target="_blank" class="primary-cta">
              <i class="fab fa-whatsapp"></i>
              Discuss Your Prototype
            </a>

            <div class="contact-detail">
              <i class="fas fa-phone"></i>
              <span>+91 9347206123</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1: Our Capabilities -->
    <section class="capabilities-section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-icon">
            <i class="fas fa-rocket"></i>
          </div>
          <div>
            <h2 class="section-title">OUR CAPABILITIES</h2>
            <p class="section-subtitle">Custom Robotics Solutions Across Industries</p>
          </div>
        </div>

        <div class="capabilities-grid">
          <!-- Capability 1: Service Automation -->
          <div class="capability-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-glow service-glow"></div>
            <div class="capability-icon">
              <i class="fas fa-concierge-bell"></i>
            </div>
            <h3 class="capability-title">Service Automation</h3>
            <p class="capability-description">
              Intelligent serving robots for hospitals, hotels, and restaurants. 
              Autonomous navigation, voice interaction, and seamless hospitality automation.
            </p>
            <ul class="capability-features">
              <li><i class="fas fa-check"></i> Hospitals & Healthcare</li>
              <li><i class="fas fa-check"></i> Hotels & Restaurants</li>
              <li><i class="fas fa-check"></i> Event Management</li>
            </ul>
            <div class="capability-tag">Hospitality Tech</div>
          </div>

          <!-- Capability 2: Industrial Prototyping -->
          <div class="capability-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-glow industrial-glow"></div>
            <div class="capability-icon">
              <i class="fas fa-industry"></i>
            </div>
            <h3 class="capability-title">Industrial Prototyping</h3>
            <p class="capability-description">
              Proof-of-Concept development for logistics, warehousing, and manufacturing. 
              From AGVs to custom automation solutions.
            </p>
            <ul class="capability-features">
              <li><i class="fas fa-check"></i> Automated Guided Vehicles</li>
              <li><i class="fas fa-check"></i> Warehouse Robotics</li>
              <li><i class="fas fa-check"></i> Manufacturing POCs</li>
            </ul>
            <div class="capability-tag">Industrial 4.0</div>
          </div>

          <!-- Capability 3: Branding Robots -->
          <div class="capability-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-glow branding-glow"></div>
            <div class="capability-icon">
              <i class="fas fa-bullhorn"></i>
            </div>
            <h3 class="capability-title">Branding Robots</h3>
            <p class="capability-description">
              Interactive mascot robots for events, exhibitions, and brand activations. 
              Custom designs that embody your brand identity.
            </p>
            <ul class="capability-features">
              <li><i class="fas fa-check"></i> Tech Exhibitions</li>
              <li><i class="fas fa-check"></i> Product Launches</li>
              <li><i class="fas fa-check"></i> Corporate Events</li>
            </ul>
            <div class="capability-tag">Brand Tech</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: The Process -->
    <section class="process-section">
      <div class="section-container">
        <div class="section-header" data-aos="fade-up">
          <div class="section-icon">
            <i class="fas fa-project-diagram"></i>
          </div>
          <div>
            <h2 class="section-title">THE ENGINEERING PROCESS</h2>
            <p class="section-subtitle">From Concept to Deployment in 4 Steps</p>
          </div>
        </div>

        <div class="process-timeline">
          <!-- Step 1 -->
          <div class="process-step" data-aos="fade-right" data-aos-delay="100">
            <div class="step-number">01</div>
            <div class="step-content">
              <div class="step-icon consultation">
                <i class="fas fa-comments"></i>
              </div>
              <h3 class="step-title">Consultation & Requirement Analysis</h3>
              <p class="step-description">
                We understand your business needs, technical constraints, and budget. 
                Our team analyzes feasibility and proposes the optimal solution architecture.
              </p>
              <div class="step-details">
                <span><i class="fas fa-clock"></i> 1-2 Days</span>
                <span><i class="fas fa-handshake"></i> Free Consultation</span>
              </div>
            </div>
            <div class="step-connector"></div>
          </div>

          <!-- Step 2 -->
          <div class="process-step" data-aos="fade-left" data-aos-delay="200">
            <div class="step-number">02</div>
            <div class="step-content">
              <div class="step-icon design">
                <i class="fas fa-drafting-compass"></i>
              </div>
              <h3 class="step-title">Design & CAD Modeling</h3>
              <p class="step-description">
                Our engineers create detailed 3D CAD models, circuit schematics, and system diagrams. 
                You review and approve before fabrication begins.
              </p>
              <div class="step-details">
                <span><i class="fas fa-clock"></i> 1-2 Weeks</span>
                <span><i class="fas fa-cube"></i> 3D Visualization</span>
              </div>
            </div>
            <div class="step-connector"></div>
          </div>

          <!-- Step 3 -->
          <div class="process-step" data-aos="fade-right" data-aos-delay="300">
            <div class="step-number">03</div>
            <div class="step-content">
              <div class="step-icon fabrication">
                <i class="fas fa-tools"></i>
              </div>
              <h3 class="step-title">Fabrication & Assembly</h3>
              <p class="step-description">
                In-house 3D printing, PCB fabrication, and mechanical assembly. 
                Iterative testing ensures quality at every stage.
              </p>
              <div class="step-details">
                <span><i class="fas fa-clock"></i> 2-4 Weeks</span>
                <span><i class="fas fa-hammer"></i> In-House Manufacturing</span>
              </div>
            </div>
            <div class="step-connector"></div>
          </div>

          <!-- Step 4 -->
          <div class="process-step" data-aos="fade-left" data-aos-delay="400">
            <div class="step-number">04</div>
            <div class="step-content">
              <div class="step-icon deployment">
                <i class="fas fa-rocket"></i>
              </div>
              <h3 class="step-title">Testing & Deployment</h3>
              <p class="step-description">
                Final integration, field testing, and on-site deployment. 
                We provide training and ongoing technical support.
              </p>
              <div class="step-details">
                <span><i class="fas fa-clock"></i> 1 Week</span>
                <span><i class="fas fa-life-ring"></i> Support Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="final-cta-section">
      <div class="cta-container" data-aos="zoom-in">
        <div class="cta-background">
          <div class="cta-pattern"></div>
        </div>
        <div class="cta-content">
          <div class="cta-icon">
            <i class="fas fa-industry"></i>
          </div>
          <h2 class="cta-title">Ready to Automate?</h2>
          <p class="cta-subtitle">
            Let's discuss how custom robotics can transform your business operations
          </p>
          <a href="https://wa.me/919347206123?text=Hi%20FAA,%20I%20want%20to%20discuss%20my%20robotics%20automation%20idea." target="_blank" class="final-cta-btn">
            <i class="fab fa-whatsapp"></i>
            Discuss Your Idea With Us
          </a>
          <div class="cta-contact">
            <i class="fas fa-phone-alt"></i>
            <span>+91 9347206123</span>
          </div>
          <div class="cta-note">
            <i class="fas fa-shield-alt"></i>
            <span>NDA-Protected Consultations Available</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Footer from '../components/Footer.vue'

const carousel1 = ref(null)
const carousel2 = ref(null)
const carousel3 = ref(null)

let intervals = []

const startCarousel = (carouselRef, delay = 0) => {
  setTimeout(() => {
    const interval = setInterval(() => {
      if (!carouselRef.value) return
      
      const images = carouselRef.value.querySelectorAll('img')
      let activeIndex = -1
      
      images.forEach((img, idx) => {
        if (img.classList.contains('carousel-active')) {
          activeIndex = idx
          img.classList.remove('carousel-active')
        }
      })
      
      const nextIndex = (activeIndex + 1) % images.length
      images[nextIndex].classList.add('carousel-active')
    }, 3500)
    
    intervals.push(interval)
  }, delay)
}

onMounted(() => {
  // Initialize AOS animations if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
  
  // Start carousels with staggered delays
  startCarousel(carousel1, 0)
  startCarousel(carousel2, 1000)
  startCarousel(carousel3, 2000)
})

onUnmounted(() => {
  intervals.forEach(interval => clearInterval(interval))
})
</script>

<style scoped>
/* ================================
   HERO HEADER
   ================================ */
.hero-header {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero-header {
    height: auto;
    min-height: 100vh;
    padding: 2rem 1.5rem;
  }

  .hero-content {
    padding: 1rem !important;
  }

  .subtitle {
    font-size: 1.2rem !important;
    margin: 1rem 0 !important;
  }

  .slogan {
    font-size: 1rem !important;
    margin-bottom: 1.5rem !important;
  }

  .hero-badge {
    padding: 0.75rem 1.5rem !important;
    font-size: 1rem !important;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.neon-circles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  border: 2px solid;
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 400px;
  height: 400px;
  border-color: rgba(0, 255, 255, 0.3);
  top: 10%;
  left: 10%;
}

.circle-2 {
  width: 300px;
  height: 300px;
  border-color: rgba(0, 168, 204, 0.3);
  bottom: 15%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 250px;
  height: 250px;
  border-color: rgba(0, 255, 255, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}

.title-container {
  position: relative;
  display: inline-block;
}

.main-title {
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 8px;
  margin: 0;
  background: linear-gradient(135deg, #00ffff 0%, #00a8cc 50%, #00ffff 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite, textGlow 2s ease-in-out infinite;
  text-shadow: 0 0 60px rgba(0, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .main-title {
    font-size: 2.8rem;
    letter-spacing: 3px;
  }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes textGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.title-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

.subtitle {
  font-size: 1.8rem;
  margin: 1.5rem 0;
  color: #00ffff;
  letter-spacing: 3px;
  font-weight: 600;
}

.slogan {
  font-size: 1.3rem;
  color: rgba(0, 255, 255, 0.8);
  font-style: italic;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00ffff 0%, #00a8cc 100%);
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f1419;
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hero-badge i {
  font-size: 1.5rem;
}

.scroll-down {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-down i {
  font-size: 2.5rem;
  color: #00ffff;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-15px); }
}

/* ================================
   BASE STYLES
   ================================ */
.corporates-page {
  min-height: 100vh;
  background: #0f1419;
  position: relative;
  overflow-x: hidden;
}

/* ================================
   HERO WRAPPER & DASHBOARD CARD
   ================================ */
.hero-wrapper {
  min-height: 100vh;
  padding: 100px 2rem 2rem 2rem;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(0deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
  pointer-events: none;
}

.hero-dashboard {
  max-width: 1100px;
  width: 100%;
  display: grid;
  grid-template-columns: 220px 220px 1fr;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid rgba(0, 255, 255, 0.2);
  box-shadow: 0 20px 80px rgba(0, 255, 255, 0.15);
  position: relative;
  z-index: 1;
}

.hero-zone {
  position: relative;
  z-index: 1;
}

/* ================================
   ZONE 1: VIDEO
   ================================ */
.video-zone {
  display: flex;
  align-items: stretch;
  background: transparent;
  border-right: none;
}

.video-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1);
}

.video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(0, 255, 255, 0.3);
}

.pulse-indicator {
  width: 10px;
  height: 10px;
  background: #00ffff;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px #00ffff;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.video-overlay span {
  color: #00ffff;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 2px;
}

/* ================================
   ZONE 2: CAROUSELS
   ================================ */
.carousel-zone {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
  justify-content: stretch;
  background: transparent;
  border-right: none;
}

.carousel-container {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.4s ease;
  flex: 1;
}

.carousel-container:hover {
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.15);
}

.carousel-label {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 255, 0.3);
}

.carousel-label i {
  color: #00ffff;
  font-size: 0.75rem;
}

.carousel-label span {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 0.5px;
}

.image-carousel {
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  background: #000000;
}

.image-carousel img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.image-carousel img.carousel-active {
  opacity: 1;
}

/* ================================
   ZONE 3: PITCH
   ================================ */
.pitch-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.03) 0%, transparent 100%);
}

.pitch-content {
  max-width: 600px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 50px;
  margin-bottom: 1rem;
}

.tech-badge i {
  color: #00ffff;
}

.tech-badge span {
  color: #00ffff;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 2px;
}

.pitch-headline {
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 0.75rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.1;
  letter-spacing: -1px;
}

.gradient-text {
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pitch-subheadline {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.tech-specs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.spec-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(0, 255, 255, 0.05);
  border-color: rgba(0, 255, 255, 0.3);
  transform: translateX(10px);
}

.spec-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.spec-icon i {
  color: #0f1419;
  font-size: 1.1rem;
}

.spec-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.spec-content strong {
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}

.spec-content span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  color: #0f1419;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.3);
  border: none;
}

.primary-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(0, 255, 255, 0.5);
}

.primary-cta i {
  font-size: 1.5rem;
}

.contact-detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
}

.contact-detail i {
  color: #00ffff;
}

/* ================================
   SECTION CONTAINERS
   ================================ */
.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 255, 255, 0.2);
}

.section-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-icon i {
  font-size: 1.75rem;
  color: #0f1419;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0.5rem 0 0 0;
}

/* ================================
   CAPABILITIES SECTION
   ================================ */
.capabilities-section {
  background: #0f1419;
  position: relative;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.capability-card {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 2px solid rgba(0, 255, 255, 0.15);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.capability-card:hover .card-glow {
  opacity: 1;
}

.capability-card:hover {
  border-color: rgba(0, 255, 255, 0.4);
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.2);
}

.capability-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.capability-icon i {
  font-size: 2.5rem;
  color: #0f1419;
}

.capability-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.capability-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.capability-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  z-index: 1;
}

.capability-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.capability-features i {
  color: #00ffff;
  font-size: 0.85rem;
}

.capability-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  color: #00ffff;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
}

/* ================================
   PROCESS SECTION
   ================================ */
.process-section {
  background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%);
  position: relative;
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 45px;
  top: 40px;
  bottom: 40px;
  width: 2px;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0.5) 50%, rgba(0, 255, 255, 0.2) 100%);
}

.process-step {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 1.5rem;
  align-items: start;
  position: relative;
}

.step-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(0, 255, 255, 0.1);
  font-family: 'Poppins', sans-serif;
  line-height: 1;
  text-align: right;
  position: sticky;
  top: 100px;
}

.step-content {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid rgba(0, 255, 255, 0.15);
  transition: all 0.4s ease;
}

.step-content:hover {
  border-color: rgba(0, 255, 255, 0.4);
  transform: translateX(10px);
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.2);
}

.step-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.step-icon.consultation {
  background: linear-gradient(135deg, #00ffff, #00a8cc);
}

.step-icon.design {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.step-icon.fabrication {
  background: linear-gradient(135deg, #ff8c00, #ff6347);
}

.step-icon.deployment {
  background: linear-gradient(135deg, #32cd32, #228b22);
}

.step-icon i {
  font-size: 1.5rem;
  color: #ffffff;
}

.step-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
  font-family: 'Poppins', sans-serif;
}

.step-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.step-details {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.step-details span {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
  font-weight: 600;
}

.step-details i {
  color: #00ffff;
}

/* ================================
   FINAL CTA SECTION
   ================================ */
.final-cta-section {
  padding: 4rem 2rem;
  background: #0f1419;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 168, 204, 0.1) 100%);
}

.cta-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
  animation: patternPulse 8s ease-in-out infinite;
}

@keyframes patternPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.cta-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 4rem 2rem;
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 30px;
  background: rgba(15, 20, 25, 0.8);
  backdrop-filter: blur(20px);
}

.cta-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  animation: floatAnimation 3s ease-in-out infinite;
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.cta-icon i {
  font-size: 2.5rem;
  color: #0f1419;
}

.cta-title {
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.cta-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.final-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #00ffff, #00a8cc);
  color: #0f1419;
  text-decoration: none;
  border-radius: 15px;
  font-weight: 800;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.3);
  margin-bottom: 1.5rem;
}

.final-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(0, 255, 255, 0.5);
}

.final-cta-btn i {
  font-size: 1.75rem;
}

.cta-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.cta-contact i {
  color: #00ffff;
}

.cta-note {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.cta-note i {
  color: #00ffff;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1400px) {
  .hero-dashboard {
    grid-template-columns: 200px 200px 1fr;
    gap: 1rem;
  }

  .pitch-headline {
    font-size: 1.75rem;
  }

  .pitch-zone {
    padding: 1.5rem;
  }
}

@media (max-width: 1200px) {
  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .hero-dashboard {
    grid-template-columns: 1fr;
    max-width: 800px;
    gap: 1rem;
  }

  .video-zone {
    min-height: 400px;
  }

  .carousel-zone {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .pitch-zone {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 3rem 1.5rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .pitch-headline {
    font-size: 2rem;
  }

  .process-timeline::before {
    left: 35px;
  }

  .process-step {
    grid-template-columns: 70px 1fr;
    gap: 1rem;
  }

  .step-number {
    font-size: 2.5rem;
  }

  .step-content {
    padding: 1.5rem;
  }

  .cta-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .pitch-headline {
    font-size: 1.75rem;
  }

  .tech-specs {
    gap: 1rem;
  }

  .spec-item {
    padding: 1rem;
  }

  .primary-cta,
  .final-cta-btn {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  .carousel-zone {
    gap: 1rem;
  }

  .capability-card {
    padding: 1.5rem;
  }
}
</style>
