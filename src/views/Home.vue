<template>
  <div class="home-page">
    <!-- SECTION 1: HERO SECTION -->
    <section class="hero-section">
      <!-- Background Video -->
      <div class="video-background">
        <video 
          class="background-video"
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source src="/assets/Home/home.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>

      <!-- Hero Content -->
      <div class="hero-content">
        <div class="hero-text-container">
          <!-- Main Headline with Typewriter Effect -->
          <h1 class="hero-headline">
            <span class="typewriter">{{ displayedText }}</span>
          </h1>

          <!-- Sub Headline -->
          <p class="hero-subheadline">
            The Avengers of Robotics Education. Transforming Schools into Innovation Hubs.
          </p>

          <!-- Action Buttons -->
          <div class="hero-buttons">
            <router-link to="/institutions" class="hero-btn hero-btn-primary">
              <i class="fas fa-building"></i>
              <span class="btn-text">For Institutions</span>
              <i class="fas fa-arrow-right btn-arrow"></i>
            </router-link>
            
            <router-link to="/student-zone" class="hero-btn hero-btn-secondary">
              <i class="fas fa-graduation-cap"></i>
              <span class="btn-text">For Students</span>
              <i class="fas fa-arrow-right btn-arrow"></i>
            </router-link>
          </div>

          <!-- Scroll Indicator -->
          <div class="scroll-indicator">
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: TRUST STRIP -->
    <section class="trust-section">
      <div class="section-pattern"></div>
      <div class="trust-container">
        <h2 class="section-title">
          Recognized by <span class="gradient-text">Leaders of Innovation</span>
        </h2>
        <div class="trust-logos-wrapper">
          <div class="trust-logos">
            <div class="logo-item" v-for="n in 12" :key="n">
              <img :src="`/assets/Home/Trust${((n - 1) % 6) + 1}.png`" :alt="`Trust Logo ${((n - 1) % 6) + 1}`" class="trust-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: IMPACT DASHBOARD -->
    <section class="impact-section">
      <div class="section-pattern"></div>
      <div class="impact-container">
        <h2 class="section-title">
          Our <span class="gradient-text">Impact</span>
        </h2>
        <div class="impact-grid">
          <div class="impact-card" v-for="(stat, index) in stats" :key="index">
            <div class="impact-icon">
              <i :class="stat.iconClass"></i>
            </div>
            <div class="impact-number">
              <span class="number">{{ animatedStats[index] }}</span>
              <span class="plus">+</span>
            </div>
            <div class="impact-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: WHO ARE WE? -->
    <section class="who-are-we-section">
      <div class="section-pattern"></div>
      <div class="who-are-we-container">
        <!-- Left Side: Text Content -->
        <div class="who-are-we-text">
          <h2 class="who-are-we-headline">Building the Creators of Tomorrow.</h2>
          <p class="who-are-we-body">
            At FAA Robotics, we don't just teach code. We build character. Using our unique Design Thinking Methodology, we empower students to Empathize, Define, Ideate, and Prototype real-world solutions. From NTR to Krishna District, we are the region's premier robotics partner.
          </p>
          <div class="who-are-we-highlight">
            <span class="highlight-icon">✓</span>
            <span class="highlight-text">Powered by the Design Thinking Process.</span>
          </div>
        </div>

        <!-- Right Side: Design Thinking Cycle -->
        <div class="design-thinking-cycle">
          <h3 class="cycle-title">Design Thinking Process</h3>
          <p class="cycle-subtitle">A Human-Centered Approach to Innovation</p>
          
          <svg viewBox="0 0 720 560" class="cycle-svg">
            <defs>
              <!-- Arrow marker definition -->
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#00bfff" class="arrow-fill" />
              </marker>
              
              <!-- Gradient for arrows -->
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#00bfff;stop-opacity:0.6" />
                <stop offset="100%" style="stop-color:#00bfff;stop-opacity:1" />
              </linearGradient>
            </defs>
            
            <!-- Empathize (Top Center) -->
            <g class="bubble-group" data-stage="empathize">
              <circle cx="360" cy="90" r="60" class="cycle-bubble" />
              <text x="360" y="82" class="stage-label">Empathize</text>
              <text x="360" y="105" class="stage-number">01</text>
            </g>
            
            <!-- Arrow: Empathize to Define -->
            <path d="M 415 110 Q 470 140 505 175" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Define (Top Right) -->
            <g class="bubble-group" data-stage="define">
              <circle cx="540" cy="210" r="60" class="cycle-bubble" />
              <text x="540" y="205" class="stage-label">Define</text>
              <text x="540" y="223" class="stage-number">02</text>
            </g>
            
            <!-- Arrow: Define to Ideate -->
            <path d="M 520 265 Q 495 325 465 370" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Ideate (Bottom Right) -->
            <g class="bubble-group" data-stage="ideate">
              <circle cx="440" cy="420" r="60" class="cycle-bubble" />
              <text x="440" y="415" class="stage-label">Ideate</text>
              <text x="440" y="433" class="stage-number">03</text>
            </g>
            
            <!-- Arrow: Ideate to Prototype -->
            <path d="M 380 420 Q 360 420 340 420" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Prototype (Bottom Left) -->
            <g class="bubble-group" data-stage="prototype">
              <circle cx="280" cy="420" r="60" class="cycle-bubble" />
              <text x="280" y="415" class="stage-label">Prototype</text>
              <text x="280" y="433" class="stage-number">04</text>
            </g>
            
            <!-- Arrow: Prototype to Test -->
            <path d="M 255 365 Q 230 325 215 275" class="bubble-arrow" marker-end="url(#arrowhead)" />
            
            <!-- Test (Top Left) -->
            <g class="bubble-group" data-stage="test">
              <circle cx="180" cy="210" r="60" class="cycle-bubble" />
              <text x="180" y="205" class="stage-label">Test</text>
              <text x="180" y="223" class="stage-number">05</text>
            </g>
            
            <!-- Arrow: Test back to Empathize (completing the cycle) -->
            <path d="M 215 175 Q 270 120 305 105" class="bubble-arrow" marker-end="url(#arrowhead)" />
          </svg>
          
          <!-- Cycle indicator -->
          <div class="cycle-indicator">
            <i class="fas fa-sync-alt"></i>
            <span>Iterate & Improve Continuously</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: OUR ECOSYSTEM -->
    <section class="ecosystem-section">
      <div class="section-pattern"></div>
      <div class="ecosystem-container">
        <h2 class="section-title">Choose Your <span class="gradient-text">Path</span></h2>
        
        <div class="ecosystem-cards">
          <!-- Card 1: For Institutions -->
          <router-link to="/institutions" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-microchip"></i>
            </div>
            <h3 class="ecosystem-card-title">For Institutions</h3>
            <p class="ecosystem-card-text">Set up ATL & AI Labs. Compliance, Training, & Dashboard Management.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>

          <!-- Card 2: Student Zone -->
          <router-link to="/student-zone" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="ecosystem-card-title">Student Zone</h3>
            <p class="ecosystem-card-text">Join Prerana, Adharvana, or 'What If??'. Master Robotics from home.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>

          <!-- Card 3: Robo Store -->
          <router-link to="/store" class="ecosystem-card">
            <div class="ecosystem-card-icon">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <h3 class="ecosystem-card-title">Robo Store</h3>
            <p class="ecosystem-card-text">Buy Kits, Sensors, & 'Practical Thinker' Books.</p>
            <span class="ecosystem-card-cta">Explore <i class="fas fa-arrow-right"></i></span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- SECTION 6: SUCCESS STORIES -->
    <section class="success-stories-section">
      <div class="section-pattern"></div>
      <div class="success-stories-container">
        <h2 class="section-title">Innovation in <span class="gradient-text">Action</span></h2>
        
        <div class="gallery-carousel">
          <!-- Column 1 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(0) }" @click="handleGalleryItemClick(0)">
              <img :src="`/assets/Home/image (${(galleryIndex1 % 16) + 1}).jpg`" :alt="`Gallery image ${(galleryIndex1 % 16) + 1}`" class="gallery-image" />
            </div>
          </div>

          <!-- Column 2 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(1) }" @click="handleGalleryItemClick(1)">
              <img :src="`/assets/Home/image (${((galleryIndex2 + 5) % 16) + 1}).jpg`" :alt="`Gallery image ${((galleryIndex2 + 5) % 16) + 1}`" class="gallery-image" />
            </div>
          </div>

          <!-- Column 3 -->
          <div class="gallery-column">
            <div class="gallery-item" :class="{ clicked: clickedGalleryItems.has(2) }" @click="handleGalleryItemClick(2)">
              <img :src="`/assets/Home/image (${((galleryIndex3 + 10) % 16) + 1}).jpg`" :alt="`Gallery image ${((galleryIndex3 + 10) % 16) + 1}`" class="gallery-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Footer from '../components/Footer.vue'

const displayedText = ref('')
const fullText = 'FUTURIZE. ACTIVATE. ASSEMBLE.'
const typingComplete = ref(false)

// Stats data
const stats = [
  { 
    number: 200, 
    label: 'INSPIRE MANAK Projects',
    iconClass: 'fas fa-trophy'
  },
  { 
    number: 100, 
    label: 'Innovation Awards Won',
    iconClass: 'fas fa-medal'
  },
  { 
    number: 15, 
    label: 'School Innovation Marathon Selections',
    iconClass: 'fas fa-rocket'
  }
]

const animatedStats = ref([0, 0, 0])

// Gallery carousel indices
const galleryIndex1 = ref(0)
const galleryIndex2 = ref(0)
const galleryIndex3 = ref(0)
const clickedGalleryItems = ref(new Set())

const handleGalleryItemClick = (itemIndex) => {
  if (clickedGalleryItems.value.has(itemIndex)) {
    clickedGalleryItems.value.delete(itemIndex)
  } else {
    clickedGalleryItems.value.add(itemIndex)
  }
}

onMounted(() => {
  // Typewriter animation
  let index = 0
  const typeSpeed = 100
  
  const typeWriter = () => {
    if (index < fullText.length) {
      displayedText.value += fullText.charAt(index)
      index++
      setTimeout(typeWriter, typeSpeed)
    } else {
      setTimeout(() => {
        typingComplete.value = true
      }, 500)
    }
  }
  
  setTimeout(typeWriter, 500)

  // Intersection Observer for stats animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateStats()
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  // Observe the impact section
  setTimeout(() => {
    const impactSection = document.querySelector('.impact-section')
    if (impactSection) {
      observer.observe(impactSection)
    }
  }, 100)

  // Gallery carousel animation
  const galleryInterval = setInterval(() => {
    galleryIndex1.value += 1
    galleryIndex2.value += 1
    galleryIndex3.value += 1
  }, 4000) // Change image every 4 seconds

  // Cleanup on unmount
  onBeforeUnmount(() => {
    clearInterval(galleryInterval)
  })
})

function animateStats() {
  stats.forEach((stat, index) => {
    let current = 0
    const increment = stat.number / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.number) {
        animatedStats.value[index] = stat.number
        clearInterval(timer)
      } else {
        animatedStats.value[index] = Math.floor(current)
      }
    }, 30)
  })
}
</script>

<style scoped>
.home-page {
  width: 100%;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
}

/* HERO SECTION */
.hero-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: -80px;
  padding-top: 80px;
}

/* Background Video */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 14, 39, 0.85) 0%,
    rgba(26, 31, 58, 0.85) 50%,
    rgba(10, 14, 39, 0.85) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.02) 2px,
      rgba(102, 126, 234, 0.02) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.02) 2px,
      rgba(102, 126, 234, 0.02) 4px
    );
  animation: patternMove 20s ease-in-out infinite;
  z-index: 3;
  pointer-events: none;
}

@keyframes patternMove {
  0%, 100% { transform: translate(0, 0); opacity: 0.3; }
  50% { transform: translate(20px, 20px); opacity: 0.5; }
}

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  z-index: 4;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text-container {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-headline {
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  font-weight: 900;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(102, 126, 234, 0.5);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.3;
  animation: titleGlow 3s ease-in-out infinite;
  position: relative;
  padding: 0.5rem;
}

.hero-headline::before {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: blur(8px);
  opacity: 0.5;
  z-index: -1;
}

@keyframes titleGlow {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.typewriter {
  display: inline-block;
}

.hero-subheadline {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.5px;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 2px solid;
}

.hero-btn i {
  transition: transform 0.3s ease;
}

.hero-btn .btn-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.hero-btn:hover .btn-arrow {
  opacity: 1;
  transform: translateX(0);
}

.hero-btn:hover i:first-child {
  transform: scale(1.2);
}

.hero-btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.hero-btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
}

.hero-btn-secondary {
  background: transparent;
  border-color: #667eea;
  color: #667eea;
}

.hero-btn-secondary:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
  border-color: #764ba2;
  color: #764ba2;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
}

.scroll-indicator i {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
  }

  .hero-headline {
    white-space: normal;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }

  .hero-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .hero-btn {
    width: 100%;
    max-width: 280px;
  }

  .scroll-indicator {
    margin-top: 2rem;
  }
}

/* ================================
   SECTION 2: TRUST STRIP
   ================================ */
.trust-section {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.section-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(118, 75, 162, 0.08) 0%, transparent 50%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(102, 126, 234, 0.02) 2px,
      rgba(102, 126, 234, 0.02) 4px
    );
  pointer-events: none;
}

.trust-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Horizontal Scrolling Wrapper */
.trust-logos-wrapper {
  overflow: hidden;
  width: 100%;
}

.trust-logos {
  display: flex;
  gap: 3rem;
  padding: 1rem 0;
  animation: scroll-horizontal 60s linear infinite;
  width: fit-content;
}

@keyframes scroll-horizontal {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.4s ease;
}

.logo-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(102, 126, 234, 0.5);
  transform: translateY(-5px);
}

.trust-logo {
  height: 60px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  opacity: 0.85;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0) invert(1);
}

.logo-item:hover .trust-logo {
  opacity: 1;
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .trust-section {
    padding: 2rem 1rem;
  }

  .trust-logos {
    gap: 2rem;
  }

  .trust-logo {
    height: 50px;
    max-width: 100px;
  }

  .logo-item {
    min-width: 120px;
  }
}

/* ================================
   SECTION 3: IMPACT DASHBOARD
   ================================ */
.impact-section {
  background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.impact-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.impact-card {
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}

.impact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.impact-card:hover::before {
  opacity: 1;
}

.impact-card:hover {
  transform: translateY(-8px);
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.3),
    0 0 40px rgba(118, 75, 162, 0.2);
}

.impact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.impact-icon i {
  font-size: 2.5rem;
  color: #ffffff;
}

.impact-card:hover .impact-icon {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.5);
}

.impact-number {
  margin: 1rem 0 0.75rem;
  line-height: 1;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.number {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.plus {
  font-size: 1.5rem;
  color: #667eea;
  margin-left: 0.25rem;
  font-weight: 700;
}

.impact-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .impact-section {
    padding: 2rem 1rem;
  }

  .impact-grid {
    gap: 1.5rem;
  }

  .impact-icon {
    width: 70px;
    height: 70px;
  }

  .impact-icon i {
    font-size: 2rem;
  }

  .number {
    font-size: 2.5rem;
  }

  .plus {
    font-size: 1.25rem;
  }

  .impact-label {
    font-size: 0.875rem;
  }
}

/* ================================
   SECTION 4: WHO ARE WE?
   ================================ */
.who-are-we-section {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.who-are-we-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.who-are-we-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.who-are-we-headline {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.3;
  font-family: 'Poppins', sans-serif;
}

.who-are-we-body {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
}

.who-are-we-highlight {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border-left: 4px solid #667eea;
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.3);
}

.highlight-icon {
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

.highlight-text {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.design-thinking-cycle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  border: 2px solid rgba(102, 126, 234, 0.3);
  backdrop-filter: blur(10px);
}

.cycle-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.cycle-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin: -0.5rem 0 0.5rem 0;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.cycle-svg {
  width: 100%;
  max-width: 700px;
  height: auto;
  margin: 1rem 0;
}

/* Bubble styling */
.cycle-bubble {
  fill: rgba(102, 126, 234, 0.2);
  stroke: #667eea;
  stroke-width: 3;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  filter: drop-shadow(0 4px 12px rgba(102, 126, 234, 0.3));
}

.bubble-group:hover .cycle-bubble {
  stroke: #764ba2;
  stroke-width: 4;
  fill: rgba(118, 75, 162, 0.3);
  filter: drop-shadow(0 8px 24px rgba(118, 75, 162, 0.5));
  transform: scale(1.05);
  transform-origin: center;
}

/* Stage labels */
.stage-label {
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 16px;
  font-weight: 700;
  fill: #ffffff;
  font-family: 'Poppins', sans-serif;
  pointer-events: none;
  transition: all 0.3s ease;
}

.bubble-group:hover .stage-label {
  fill: #764ba2;
  font-size: 17px;
}

.stage-number {
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 12px;
  font-weight: 600;
  fill: rgba(255, 255, 255, 0.7);
  font-family: 'Poppins', sans-serif;
  pointer-events: none;
  transition: all 0.3s ease;
}

.bubble-group:hover .stage-number {
  fill: #764ba2;
  font-weight: 700;
}

/* Arrow styling */
.bubble-arrow {
  fill: none;
  stroke: url(#arrowGradient);
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: all 0.4s ease;
  opacity: 0.5;
}

.cycle-svg:hover .bubble-arrow {
  stroke-width: 3;
  opacity: 0.8;
  stroke: #667eea;
}

.arrow-dot {
  fill: #667eea;
  opacity: 0.5;
  transition: all 0.3s ease;
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% {
    r: 3;
    opacity: 0.5;
  }
  50% {
    r: 4;
    opacity: 0.8;
  }
}

.cycle-svg:hover .arrow-dot {
  fill: #764ba2;
  opacity: 1;
}

/* Arrow marker */
.arrow-fill {
  transition: fill 0.3s ease;
}

.cycle-svg:hover .arrow-fill {
  fill: #764ba2;
}

/* Cycle indicator */
.cycle-indicator {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(102, 126, 234, 0.2);
  padding: 1rem 2rem;
  border-radius: 50px;
  margin-top: 0.5rem;
  border: 1.5px solid rgba(102, 126, 234, 0.4);
}

.cycle-indicator i {
  font-size: 1.25rem;
  color: #667eea;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.cycle-indicator span {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 1024px) {
  .who-are-we-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .who-are-we-headline {
    font-size: 2rem;
  }

  .cycle-svg {
    max-width: 550px;
  }

  .stage-label {
    font-size: 14px;
  }

  .stage-number {
    font-size: 11px;
  }

  .cycle-indicator {
    padding: 0.85rem 1.5rem;
  }

  .cycle-indicator span {
    font-size: 0.85rem;
  }
}

/* ================================
   SECTION 5: OUR ECOSYSTEM
   ================================ */
.ecosystem-section {
  background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.ecosystem-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.ecosystem-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.ecosystem-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.ecosystem-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.ecosystem-card:hover::before {
  opacity: 1;
}

.ecosystem-card:hover {
  transform: translateY(-12px);
  border-color: rgba(102, 126, 234, 0.6);
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.3),
    0 0 40px rgba(118, 75, 162, 0.2);
}

.ecosystem-card-icon {
  position: relative;
  z-index: 1;
  font-size: 3.5rem;
  color: #667eea;
  transition: all 0.4s ease;
}

.ecosystem-card:hover .ecosystem-card-icon {
  transform: scale(1.2) rotate(10deg);
  color: #764ba2;
  filter: drop-shadow(0 4px 12px rgba(118, 75, 162, 0.5));
}

.ecosystem-card-title {
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.ecosystem-card-text {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

.ecosystem-card-cta {
  position: relative;
  z-index: 1;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.ecosystem-card:hover .ecosystem-card-cta {
  filter: brightness(1.3);
  transform: translateX(4px);
}

.ecosystem-card:hover .ecosystem-card-cta i {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .ecosystem-headline {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .ecosystem-cards {
    gap: 2rem;
  }

  .ecosystem-card {
    padding: 2.5rem 2rem;
  }

  .ecosystem-card-icon {
    font-size: 2.8rem;
  }

  .ecosystem-card-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 768px) {
  .who-are-we-section {
    padding: 3rem 1.5rem;
  }

  .who-are-we-headline {
    font-size: 1.8rem;
  }

  .ecosystem-section {
    padding: 3rem 1.5rem;
  }

  .ecosystem-headline {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .ecosystem-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

/* ================================
   SECTION 6: SUCCESS STORIES
   ================================ */
.success-stories-section {
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.success-stories-container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.gallery-carousel {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.gallery-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-item {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 3px solid rgba(102, 126, 234, 0.3);
  position: relative;
}

.gallery-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 1;
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 
    0 20px 60px rgba(102, 126, 234, 0.4),
    0 0 40px rgba(118, 75, 162, 0.3);
  border-color: rgba(102, 126, 234, 0.8);
}

.gallery-item.clicked {
  border: 3px solid rgba(118, 75, 162, 0.8);
  box-shadow: 0 0 40px rgba(118, 75, 162, 0.6);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeInOut 0.8s ease-in-out;
  position: relative;
  z-index: 0;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 1024px) {
  .gallery-carousel {
    gap: 1.5rem;
  }

  .gallery-item {
    max-width: 280px;
  }
}

@media (max-width: 768px) {
  .success-stories-section {
    padding: 2rem 1rem;
  }

  .gallery-carousel {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .gallery-item {
    max-width: 100%;
  }
}
</style>
