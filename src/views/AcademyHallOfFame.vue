<template>
  <div class="academy-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">THE ACADEMY & HALL OF FAME</h1>
          <p class="hero-subtitle">Free Learning Programs. Real Impact. Your Success Story.</p>
          <p class="hero-tagline">Empowering Students, Graduates & Teachers Across India</p>
          <div class="hero-divider"></div>
        </div>
      </div>
      <div class="scroll-indicator">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- SECTION 1: OPEN KNOWLEDGE INITIATIVE -->
    <section class="knowledge-section">
      <div class="knowledge-container">
        <div class="knowledge-header">
          <h2 class="section-headline">
            <span class="headline-accent">Education Has No Borders.</span>
          </h2>
          <div class="headline-underline"></div>
        </div>
        
        <div class="knowledge-content">
          <div class="knowledge-text">
            <p class="knowledge-intro">
              At FAA Robotics, we believe innovation belongs to everyone. That's why we offer 
              <span class="highlight-text">FREE Online Learning Sessions</span> to empower students, 
              graduates, and teachers across India.
            </p>
            <p class="knowledge-tagline">Learn from anywhere, anytime.</p>
            <div class="knowledge-features">
              <div class="feature-badge">
                <i class="fas fa-globe-asia"></i>
                <span>Pan-India Access</span>
              </div>
              <div class="feature-badge">
                <i class="fas fa-infinity"></i>
                <span>Unlimited Learning</span>
              </div>
              <div class="feature-badge">
                <i class="fas fa-graduation-cap"></i>
                <span>Expert Guidance</span>
              </div>
            </div>
          </div>
          <div class="knowledge-visual">
            <div class="globe-animation">
              <div class="globe-circle"></div>
              <i class="fas fa-laptop-code globe-icon"></i>
              <div class="connection-line line-1"></div>
              <div class="connection-line line-2"></div>
              <div class="connection-line line-3"></div>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="youtube-badge">
                <i class="fab fa-youtube"></i>
                <span>Supraja Smily</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: CHOOSE YOUR MISSION -->
    <section class="missions-section">
      <div class="missions-container">
        <div class="missions-header">
          <h2 class="section-headline">
            <span class="headline-accent">Choose Your Mission</span>
          </h2>
          <p class="missions-subtitle">100% Free Programs by FAA Robotics</p>
          <div class="headline-underline"></div>
        </div>

        <!-- ROW 1: STUDENT MISSIONS -->
        <div class="missions-category">
          <h3 class="category-title">
            <i class="fas fa-rocket"></i>
            Student Missions (Grades 6-12)
          </h3>
          <div class="missions-grid">
            <!-- Card 1: PRERANA -->
            <div class="mission-card" @mouseenter="hoveredCard = 'prerana'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'prerana' }"></div>
              <div class="card-icon prerana-icon">
                <i class="fas fa-tools"></i>
              </div>
              <h4 class="card-title">PRERANA</h4>
              <p class="card-tagline">Build Your Own Skill.</p>
              <p class="card-description">
                The foundation.Start building from Battery Fans to basic circuits.
              </p>
              <div class="card-status">
                <span class="status-badge live">
                  <i class="fas fa-circle"></i> LIVE on YouTube
                </span>
              </div>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="mission-button">
                <span>Start Mission</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <!-- Card 2: ADHARVANA -->
            <div class="mission-card" @mouseenter="hoveredCard = 'adharvana'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'adharvana' }"></div>
              <div class="card-icon adharvana-icon">
                <i class="fas fa-microchip"></i>
              </div>
              <h4 class="card-title">ADHARVANA</h4>
              <p class="card-tagline">Invest Time in Logic.</p>
              <p class="card-description">
                Level Up. Dive deep into Arduino, Sensors, and how machines think.
              </p>
              <div class="card-status">
                <span class="status-badge live">
                  <i class="fas fa-circle"></i> LIVE on YouTube
                </span>
              </div>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="mission-button">
                <span>Start Mission</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <!-- Card 3: SADHANA -->
            <div class="mission-card" @mouseenter="hoveredCard = 'sadhana'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'sadhana' }"></div>
              <div class="card-icon sadhana-icon">
                <i class="fas fa-bullseye"></i>
              </div>
              <h4 class="card-title">SADHANA</h4>
              <p class="card-tagline">Practice Makes Perfect.</p>
              <p class="card-description">
                Expert Mode. Python, Chatbots, and App Dev for advanced learners.
              </p>
              <div class="card-status">
                <span class="status-badge live">
                  <i class="fas fa-circle"></i> LIVE on YouTube
                </span>
              </div>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="mission-button">
                <span>Start Mission</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <!-- Card 4: WHAT IF?? -->
            <div class="mission-card" @mouseenter="hoveredCard = 'whatif'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'whatif' }"></div>
              <div class="card-icon whatif-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h4 class="card-title">WHAT IF??</h4>
              <p class="card-tagline">Innovate the Unknown.</p>
              <p class="card-description">
                The Innovation Track. We ask the question, you invent the answer
              </p>
              <div class="card-status">
                <span class="status-badge live">
                  <i class="fas fa-circle"></i> LIVE on YouTube
                </span>
              </div>
              <a href="https://youtube.com/@smily_conceptions?si=yO0gj0d1UNPrhWuu" target="_blank" class="mission-button">
                <span>Start Mission</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- ROW 2: ADVANCED ALLIANCE -->
        <div class="missions-category">
          <h3 class="category-title">
            <i class="fas fa-star"></i>
            The Advanced Alliance
          </h3>
          <div class="missions-grid advanced-grid">
            <!-- Card 5: KOUTILYA -->
            <div class="mission-card advanced-card" @mouseenter="hoveredCard = 'koutilya'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'koutilya' }"></div>
              <div class="card-icon koutilya-icon">
                <i class="fas fa-user-graduate"></i>
              </div>
              <h4 class="card-title">KOUTILYA</h4>
              <p class="card-audience">For Graduates</p>
              <p class="card-tagline">Empowering Future Engineers.</p>
              <p class="card-description">
                Specialized sessions for graduates to bridge the gap between college and industry.
              </p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919490871276&text=Hi%2C%20I%20want%20to%20join%20Koutilya%20program" target="_blank" class="mission-button">
                <span>Join Koutilya</span>
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>

            <!-- Card 6: SPANDANA -->
            <div class="mission-card advanced-card" @mouseenter="hoveredCard = 'spandana'" @mouseleave="hoveredCard = null">
              <div class="card-glow" :class="{ active: hoveredCard === 'spandana' }"></div>
              <div class="card-icon spandana-icon">
                <i class="fas fa-hands-helping"></i>
              </div>
              <h4 class="card-title">SPANDANA</h4>
              <p class="card-audience">For Mentors</p>
              <p class="card-tagline">Support for Teachers.</p>
              <p class="card-description">
                Supporting the pillars of education. Workshops for teachers and mentors.
              </p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919490871276&text=Hi%2C%20I%20want%20to%20join%20Spandana%20program" target="_blank" class="mission-button">
                <span>Join Spandana</span>
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: HALL OF FAME -->
    <section class="hall-section">
      <div class="hall-container">
        <div class="hall-header">
          <h2 class="section-headline">
            <span class="headline-accent">The Innovation Vault</span>
          </h2>
          <p class="hall-subtitle">Witness the Power of Young Minds</p>
          <div class="headline-underline"></div>
        </div>

        <!-- Tab Navigation -->
        <div class="tab-navigation">
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'products' }"
            @click="activeTab = 'products'"
          >
            <i class="fas fa-robot"></i>
            <span>The Armory</span>
            <div class="tab-indicator"></div>
          </button>
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'students' }"
            @click="activeTab = 'students'"
          >
            <i class="fas fa-user-astronaut"></i>
            <span>Heroes of Innovation</span>
            <div class="tab-indicator"></div>
          </button>
        </div>

        <!-- Gallery Content -->
        <div class="gallery-container">
          <transition name="fade" mode="out-in">
            <!-- Products Gallery -->
            <div v-if="activeTab === 'products'" key="products" class="professional-gallery">
              <div class="gallery-row">
                <div 
                  v-for="i in 4" 
                  :key="'product-top-' + i" 
                  class="gallery-photo"
                >
                  <div class="photo-frame">
                    <img :src="`/assets/Student zone/Product (${currentProductPhotos[i - 1] + 1}).jpg`" :alt="'Product ' + (i)" loading="lazy">
                  </div>
                </div>
              </div>
              <div class="gallery-row">
                <div 
                  v-for="i in 4" 
                  :key="'product-bottom-' + i" 
                  class="gallery-photo"
                >
                  <div class="photo-frame">
                    <img :src="`/assets/Student zone/Product (${currentProductPhotos[i + 3] + 1}).jpg`" :alt="'Product ' + (i + 4)" loading="lazy">
                  </div>
                </div>
              </div>
            </div>

            <!-- Students Gallery -->
            <div v-else key="students" class="professional-gallery">
              <div class="gallery-row">
                <div 
                  v-for="i in 4" 
                  :key="'student-top-' + i" 
                  class="gallery-photo"
                >
                  <div class="photo-frame">
                    <img :src="`/assets/Student zone/Student (${currentStudentPhotos[i - 1] + 1}).jpg`" :alt="'Student ' + (i)" loading="lazy">
                  </div>
                </div>
              </div>
              <div class="gallery-row">
                <div 
                  v-for="i in 4" 
                  :key="'student-bottom-' + i" 
                  class="gallery-photo"
                >
                  <div class="photo-frame">
                    <img :src="`/assets/Student zone/Student (${currentStudentPhotos[i + 3] + 1}).jpg`" :alt="'Student ' + (i + 4)" loading="lazy">
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Footer from '../components/Footer.vue'

const hoveredCard = ref(null)
const activeTab = ref('products')

// Gallery state - showing 8 photos at a time
const currentProductPhotos = ref([0, 1, 2, 3, 4, 5, 6, 7])
const currentStudentPhotos = ref([0, 1, 2, 3, 4, 5, 6, 7])

let galleryInterval = null

// Rotate gallery photos
const rotateGallery = () => {
  if (activeTab.value === 'products') {
    // Rotate product photos (16 total products)
    currentProductPhotos.value = currentProductPhotos.value.map(index => (index + 1) % 16)
  } else {
    // Rotate student photos (10 total students)
    currentStudentPhotos.value = currentStudentPhotos.value.map(index => (index + 1) % 10)
  }
}

// Start gallery rotation
const startGallery = () => {
  galleryInterval = setInterval(() => {
    rotateGallery()
  }, 4000) // Change every 4 seconds
}

// Stop gallery rotation
const stopGallery = () => {
  if (galleryInterval) {
    clearInterval(galleryInterval)
  }
}

onMounted(() => {
  startGallery()
})

onUnmounted(() => {
  stopGallery()
})
</script>

<style scoped>
/* ================================
   GLOBAL STYLES
   ================================ */
.academy-page {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
}

/* ================================
   HERO SECTION
   ================================ */
.hero-section {
  position: relative;
  height: 75vh;
  min-height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  z-index: 1;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.03) 2px,
      rgba(102, 126, 234, 0.03) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.03) 2px,
      rgba(102, 126, 234, 0.03) 4px
    );
  animation: patternMove 20s ease-in-out infinite;
}

@keyframes patternMove {
  0%, 100% { transform: translate(0, 0); opacity: 0.5; }
  50% { transform: translate(20px, 20px); opacity: 0.8; }
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
  animation: titleGlow 3s ease-in-out infinite;
  line-height: 1.2;
}

@keyframes titleGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.hero-subtitle {
  font-size: 1.8rem;
  margin-top: 1.5rem;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 1px;
}

.hero-tagline {
  font-size: 1.2rem;
  margin-top: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  letter-spacing: 0.5px;
}

.hero-divider {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ffffff, transparent);
  margin: 2rem auto 0;
  animation: dividerSlide 2s ease-in-out infinite;
}

@keyframes dividerSlide {
  0%, 100% { transform: scaleX(1); }
  50% { transform: scaleX(1.2); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s ease-in-out infinite;
}

.scroll-indicator i {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* ================================
   SECTION COMMON STYLES
   ================================ */
.section-headline {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
}

.headline-accent {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.headline-underline {
  width: 120px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0.8rem auto 1.5rem;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}

/* ================================
   KNOWLEDGE SECTION
   ================================ */
.knowledge-section {
  padding: 2rem 2rem;
  background: rgba(255, 255, 255, 0.02);
}

.knowledge-container {
  max-width: 1400px;
  margin: 0 auto;
}

.knowledge-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.knowledge-text {
  padding: 2rem;
}

.knowledge-intro {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #e5e7eb;
  margin-bottom: 1.5rem;
}

.highlight-text {
  color: #667eea;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.3);
}

.knowledge-tagline {
  font-size: 1.5rem;
  font-weight: 600;
  color: #764ba2;
  margin-bottom: 2rem;
  font-style: italic;
}

.knowledge-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-badge {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border-left: 4px solid #667eea;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-badge:hover {
  background: rgba(102, 126, 234, 0.2);
  transform: translateX(10px);
}

.feature-badge i {
  font-size: 1.8rem;
  color: #667eea;
}

.feature-badge span {
  font-size: 1.1rem;
  color: #e5e7eb;
}

.knowledge-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.globe-animation {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.globe-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 3px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.globe-icon {
  font-size: 6rem;
  color: #667eea;
  z-index: 2;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.connection-line {
  position: absolute;
  width: 2px;
  height: 150px;
  background: linear-gradient(180deg, #667eea, transparent);
  opacity: 0.5;
}

.line-1 {
  top: -150px;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  animation: pulse-line 2s ease-in-out infinite;
}

.line-2 {
  top: 50%;
  right: -150px;
  transform: translateY(-50%) rotate(90deg);
  animation: pulse-line 2s ease-in-out infinite 0.5s;
}

.line-3 {
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  animation: pulse-line 2s ease-in-out infinite 1s;
}

@keyframes pulse-line {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

.youtube-badge {
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #ff0000;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  animation: badge-pulse 2s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% { transform: translateX(-50%) scale(1); }
  50% { transform: translateX(-50%) scale(1.05); }
}

.youtube-badge i {
  font-size: 1.5rem;
  color: #ffffff;
}

.youtube-badge span {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
}

/* ================================
   MISSIONS SECTION
   ================================ */
.missions-section {
  padding: 2rem 2rem;
  background: rgba(0, 0, 0, 0.2);
}

.missions-container {
  max-width: 1400px;
  margin: 0 auto;
}

.missions-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #fbbf24;
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.missions-category {
  margin-bottom: 2rem;
}

.category-title {
  font-size: 2rem;
  color: #e5e7eb;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background: rgba(102, 126, 234, 0.1);
  border-left: 5px solid #667eea;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.category-title i {
  color: #667eea;
}

.missions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.advanced-grid {
  grid-template-columns: repeat(2, 1fr);
}

.mission-card {
  position: relative;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.mission-card > * {
  position: relative;
  z-index: 2;
}

.mission-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #667eea;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
  pointer-events: none;
}

.card-glow.active {
  opacity: 1;
  animation: glow-rotate 3s linear infinite;
}

@keyframes glow-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.card-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  transition: all 0.3s ease;
}

.mission-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.prerana-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.adharvana-icon {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.sadhana-icon {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.whatif-icon {
  background: linear-gradient(135deg, #f59e0b, #eab308);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.koutilya-icon {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.spandana-icon {
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 1px;
}

.card-season,
.card-audience {
  text-align: center;
  font-size: 0.9rem;
  color: #9ca3af;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-tagline {
  text-align: center;
  font-size: 1.1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  font-style: italic;
}

.card-description {
  text-align: center;
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.card-status {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #10b981;
}

.status-badge.live i {
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.mission-button {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  cursor: pointer;
}

.mission-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.mission-button i {
  transition: transform 0.3s ease;
}

.mission-button:hover i {
  transform: translateX(5px);
}

/* ================================
   HALL OF FAME SECTION
   ================================ */
.hall-section {
  padding: 2rem 2rem;
  background: rgba(255, 255, 255, 0.02);
}

.hall-container {
  max-width: 1400px;
  margin: 0 auto;
}

.hall-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #9ca3af;
  margin-bottom: 1.2rem;
}

.tab-navigation {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(102, 126, 234, 0.3);
  border-radius: 50px;
  color: #9ca3af;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  border-color: #667eea;
  color: #e5e7eb;
  transform: translateY(-2px);
}

.tab-button.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.tab-button i {
  font-size: 1.3rem;
}

.tab-indicator {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 4px;
  background: #667eea;
  border-radius: 2px;
  transition: width 0.3s ease;
}

.tab-button.active .tab-indicator {
  width: 60%;
}

.gallery-container {
  min-height: auto;
  padding: 1rem 0;
}

/* ================================
   PROFESSIONAL PHOTO GALLERY
   ================================ */
.professional-gallery {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  animation: fadeIn 0.5s ease-in-out;
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
}

.gallery-photo {
  position: relative;
  aspect-ratio: 1;
  opacity: 1;
  transform: scale(1);
  transition: all 0.4s ease;
  max-height: 250px;
}

.photo-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(102, 126, 234, 0.3);
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.gallery-photo:hover .photo-frame {
  border-color: #667eea;
  box-shadow: 
    0 0 25px rgba(102, 126, 234, 0.7),
    0 0 50px rgba(102, 126, 234, 0.5),
    0 10px 40px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-photo:hover .photo-frame img {
  transform: scale(1.05);
}

.youtube-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #ff0000;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
  animation: badge-pulse 2s ease-in-out infinite;
  text-decoration: none;
  transition: all 0.3s ease;
}

.youtube-badge:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 0, 0, 0.5);
}

/* ================================
   TRANSITIONS
   ================================ */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-tagline {
    font-size: 1rem;
  }

  .section-headline {
    font-size: 2.8rem;
  }

  .knowledge-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .globe-animation {
    width: 300px;
    height: 300px;
  }

  .advanced-grid {
    grid-template-columns: 1fr;
  }

  .gallery-row {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 60vh;
  }

  .hero-title {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-tagline {
    font-size: 0.9rem;
  }

  .section-headline {
    font-size: 2.2rem;
  }

  .knowledge-section,
  .missions-section,
  .hall-section,
  .video-section {
    padding: 1.5rem 1.5rem;
  }

  .knowledge-intro {
    font-size: 1.1rem;
  }

  .globe-animation {
    width: 250px;
    height: 250px;
  }

  .globe-icon {
    font-size: 4rem;
  }

  .missions-grid {
    grid-template-columns: 1fr;
  }

  .category-title {
    font-size: 1.5rem;
    padding: 1rem;
  }

  .tab-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .tab-button {
    width: 100%;
    justify-content: center;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-tagline {
    font-size: 0.85rem;
  }

  .knowledge-section,
  .missions-section,
  .hall-section {
    padding: 1.5rem 1rem;
  }

  .section-headline {
    font-size: 1.8rem;
  }

  .mission-card {
    padding: 1.5rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }

  .professional-gallery {
    gap: 0.5rem;
    padding: 0.25rem;
  }
}
</style>
