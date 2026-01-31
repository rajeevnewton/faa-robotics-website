<template>
  <div class="about-page">
    <!-- Page Title -->
    <div class="page-header">
      <h1 class="page-title">ABOUT US</h1>
      <div class="title-underline"></div>
    </div>

    <!-- SECTION 1: OUR VISION & STORY -->
    <section class="vision-section">
      <div class="vision-container">
        <div class="vision-card">
          <!-- Left Side: Text Content -->
          <div class="vision-text-card">
            <h2 class="vision-headline">Rewiring Education for the Future</h2>
            <div class="narrative-block">
              <p class="narrative-text">
                At FAA Robotics, we believe education isn't about memorizing—it's about making. 
                Our mission is to equip the next generation with <span class="highlight">21st Century Skills</span>: 
                Critical Thinking, Collaboration, and Creativity.
              </p>
              <div class="vision-features">
                <div class="feature-item">
                  <i class="fas fa-brain"></i>
                  <span>Critical Thinking</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-users"></i>
                  <span>Collaboration</span>
                </div>
                <div class="feature-item">
                  <i class="fas fa-lightbulb"></i>
                  <span>Creativity</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: Video -->
          <div class="vision-visual">
            <div class="video-wrapper">
              <video autoplay muted loop playsinline class="vision-video">
                <source src="/assets/Home/home.mp4" type="video/mp4">
              </video>
              <div class="video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: MEET THE ALLIANCE -->
    <section class="team-section">
      <div class="team-container">
        <h2 class="team-headline">Meet The Alliance.</h2>
        <p class="team-subtitle">Our Avengers Assembling the Future of Education</p>

        <!-- Main Heroes -->
        <div class="heroes-grid">
          <!-- Hero Card: Rajeev K. -->
          <div class="hero-card" @mouseenter="setHoveredHero('rajeev')" @mouseleave="clearHoveredHero" :class="{ 'hovered': hoveredHero === 'rajeev' }">
            <div class="hero-image-wrapper cyan-glow">
              <img src="/assets/About/Rajeev.jpg" alt="Rajeev K." class="hero-image">
              <div class="hero-badge">
                <i class="fas fa-crown"></i>
              </div>
            </div>
            <div class="hero-content">
              <h3 class="hero-name">Rajeev K.</h3>
              <p class="hero-title">Founder & Director</p>
              <p class="hero-alias">"The Captain"</p>
              <div class="hero-power">
                <i class="fas fa-star"></i>
                <span>Visionary Strategy</span>
              </div>
              <p class="hero-bio">Leading the charge to democratize robotics education across India.</p>
            </div>
          </div>

          <!-- Hero Card: Supraja K. -->
          <div class="hero-card" @mouseenter="setHoveredHero('supraja')" @mouseleave="clearHoveredHero" :class="{ 'hovered': hoveredHero === 'supraja' }">
            <div class="hero-image-wrapper yellow-glow">
              <img src="/assets/About/Supraja.jpg" alt="Supraja K." class="hero-image">
              <div class="hero-badge">
                <i class="fas fa-gem"></i>
              </div>
            </div>
            <div class="hero-content">
              <h3 class="hero-name">Supraja K.</h3>
              <p class="hero-title">CEO, Director of operations and HR</p>
              <p class="hero-alias">"The Strategist"</p>
              <div class="hero-power">
                <i class="fas fa-star"></i>
                <span>Operational Excellence</span>
              </div>
              <p class="hero-bio">Building the framework that allows FAA to scale from local classrooms to national platforms.</p>
            </div>
          </div>

          <!-- Hero Card: Dinesh S. -->
          <div class="hero-card" @mouseenter="setHoveredHero('dinesh')" @mouseleave="clearHoveredHero" :class="{ 'hovered': hoveredHero === 'dinesh' }">
            <div class="hero-image-wrapper cyan-glow">
              <img src="/assets/About/Dinesh.jpg" alt="Dinesh S." class="hero-image">
              <div class="hero-badge">
                <i class="fas fa-cog"></i>
              </div>
            </div>
            <div class="hero-content">
              <h3 class="hero-name">Dinesh S.</h3>
              <p class="hero-title">Director of Robotics & Control</p>
              <p class="hero-alias">"The Architect"</p>
              <div class="hero-power">
                <i class="fas fa-star"></i>
                <span>System Architecture</span>
              </div>
              <p class="hero-bio">Designing the technical backbone of our robotics programs and innovations.</p>
            </div>
          </div>
        </div>

        <!-- Core Squad -->
        <div class="squad-section">
          <h3 class="squad-title">The Core Squad</h3>
          <div class="squad-grid">
            <!-- Squad Member: SK Irfan Pasha -->
            <div class="squad-card" @mouseenter="setHoveredSquad('irfan')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'irfan' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/Irfan Pasha.jpg" alt="SK Irfan Pasha" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">SK Irfan Pasha</h4>
                <p class="squad-role">Business Development Manager</p>
                <p class="squad-description">AP, TS Business Development</p>
              </div>
            </div>

            <!-- Squad Member: J.E. Keerthana -->
            <div class="squad-card" @mouseenter="setHoveredSquad('keerthana')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'keerthana' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/Keerthana.jpg" alt="J.E. Keerthana" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">J.E. Keerthana</h4>
                <p class="squad-role">Business Analyst</p>
                <p class="squad-description">Director of Content Writing</p>
              </div>
            </div>

            <!-- Squad Member: G Revathi -->
            <div class="squad-card" @mouseenter="setHoveredSquad('revathi')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'revathi' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/Revathi.jpg" alt="G Revathi" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">G Revathi</h4>
                <p class="squad-role">Technical Manager</p>
                <p class="squad-description">Technical Operations Lead</p>
              </div>
            </div>

            <!-- Squad Member: Vasista -->
            <div class="squad-card" @mouseenter="setHoveredSquad('vasista')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'vasista' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/Vasista.jpg" alt="Vasista" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">Vasista</h4>
                <p class="squad-role">Student Event Coordinator</p>
                <p class="squad-description">Student Engagement Lead</p>
              </div>
            </div>

            <!-- Squad Member: S Venu Gopala Krishna -->
            <div class="squad-card" @mouseenter="setHoveredSquad('venu')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'venu' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/VenuGopal Krishna.jpg" alt="S Venu Gopala Krishna" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">S Venu Gopala Krishna</h4>
                <p class="squad-role">Technical Lead</p>
                <p class="squad-description">Technology Innovation Head</p>
              </div>
            </div>

            <!-- Squad Member: Nagaveni -->
            <div class="squad-card" @mouseenter="setHoveredSquad('nagaveni')" @mouseleave="clearHoveredSquad" :class="{ 'hovered': hoveredSquad === 'nagaveni' }">
              <div class="squad-image-wrapper">
                <img src="/assets/About/Nagaveni.jpg" alt="Nagaveni" class="squad-image">
              </div>
              <div class="squad-content">
                <h4 class="squad-name">Nagaveni</h4>
                <p class="squad-role">ATL Manager</p>
                <p class="squad-description">Atal Tinkering Lab Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: CAREERS -->
    <section class="careers-section" id="join-mission">
      <div class="careers-container">
        <div class="careers-content">
          <!-- Hiring Icon -->
          <div class="hiring-icon-wrapper">
            <div class="hiring-icon">
              <i class="fas fa-users-cog"></i>
            </div>
            <div class="icon-pulse"></div>
          </div>

          <h2 class="careers-headline">Your Mission Awaits.</h2>
          <p class="careers-subtitle">Join the Revolution in Education</p>

          <div class="impact-narrative">
            <p class="impact-text">
              Every day at FAA Robotics, we're not just teaching—we're transforming lives. 
              We've empowered <span class="stat-highlight">200+ students</span> to win INSPIRE MANAK awards. 
              We've helped schools become <span class="stat-highlight">innovation hubs</span>. 
              We've watched shy kids become <span class="stat-highlight">confident creators</span>.
            </p>
            <p class="impact-text">
              But this is just the beginning. The future of India depends on preparing today's students for tomorrow's challenges. 
              <strong>This isn't just a job—it's a calling.</strong>
            </p>
            <p class="impact-text">
              If you're a passionate educator, a tech enthusiast, or someone who believes education can change the world, 
              we want you on our team. Together, we'll build the next generation of innovators, problem-solvers, and leaders.
            </p>
          </div>

          <div class="mission-features">
            <div class="mission-item">
              <i class="fas fa-rocket"></i>
              <span>Be Part of Something Bigger</span>
            </div>
            <div class="mission-item">
              <i class="fas fa-heart"></i>
              <span>Impact Lives Daily</span>
            </div>
            <div class="mission-item">
              <i class="fas fa-trophy"></i>
              <span>Drive Innovation</span>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="cta-section">
            <button class="mission-button" @click="contactUs">
              <span class="button-text">Accept the Mission</span>
              <i class="fas fa-arrow-right"></i>
              <div class="electric-effect"></div>
            </button>
            <div class="contact-info">
              <p class="contact-item">
                <i class="fab fa-whatsapp"></i>
                <a href="https://api.whatsapp.com/send/?phone=%2B919490871276" target="_blank">+91 9490871276</a>
              </p>
              <p class="contact-item">
                <i class="fas fa-envelope"></i>
                <a href="mailto:finalavengersacademy@gmail.com">finalavengersacademy@gmail.com</a>
              </p>
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

const hoveredHero = ref(null)
const hoveredSquad = ref(null)

const setHoveredHero = (hero) => {
  hoveredHero.value = hero
}

const clearHoveredHero = () => {
  hoveredHero.value = null
}

const setHoveredSquad = (squad) => {
  hoveredSquad.value = squad
}

const clearHoveredSquad = () => {
  hoveredSquad.value = null
}

const contactUs = () => {
  window.open('https://api.whatsapp.com/send/?phone=%2B919490871276', '_blank')
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1d35 100%);
  color: #ffffff;
}

/* ================================
   PAGE HEADER
   ================================ */
.page-header {
  padding: 6rem 2rem 3rem;
  text-align: center;
  background: linear-gradient(180deg, rgba(0, 191, 255, 0.1) 0%, transparent 100%);
}

.page-title {
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #00bfff 0%, #ffb300 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 4px;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.title-underline {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, #00bfff 0%, #ffb300 100%);
  margin: 1.5rem auto;
  border-radius: 2px;
}

/* ================================
   SECTION 1: VISION & STORY
   ================================ */
.vision-section {
  padding: 4rem 2rem;
}

.vision-container {
  max-width: 1400px;
  margin: 0 auto;
}

.vision-card {
  background: rgba(26, 29, 53, 0.6);
  border: 2px solid rgba(0, 191, 255, 0.3);
  border-radius: 24px;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 191, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.vision-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(0, 191, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(255, 179, 0, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.vision-text-card {
  position: relative;
  z-index: 1;
}

.vision-headline {
  font-size: 2.8rem;
  font-weight: 900;
  color: #00bfff;
  margin: 0 0 1.5rem 0;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}

.narrative-block {
  background: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid #ffb300;
}

.narrative-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e5e7eb;
  margin: 0 0 2rem 0;
}

.highlight {
  color: #ffb300;
  font-weight: 700;
}

.vision-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #00bfff;
  font-weight: 600;
}

.feature-item i {
  font-size: 1.5rem;
  color: #ffb300;
}

.vision-visual {
  position: relative;
  z-index: 1;
}

.video-wrapper {
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(0, 191, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.vision-visual:hover .video-wrapper {
  box-shadow: 0 0 40px rgba(0, 191, 255, 0.8), 0 20px 60px rgba(0, 191, 255, 0.4);
  border-color: #00bfff;
}

.vision-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.2) 0%, rgba(255, 179, 0, 0.2) 100%);
  pointer-events: none;
}

/* ================================
   SECTION 2: MEET THE ALLIANCE
   ================================ */
.team-section {
  padding: 5rem 2rem;
  background: linear-gradient(180deg, rgba(0, 191, 255, 0.05) 0%, transparent 100%);
}

.team-container {
  max-width: 1400px;
  margin: 0 auto;
}

.team-headline {
  font-size: 3.5rem;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(135deg, #ffb300 0%, #00bfff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
}

.team-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #9ca3af;
  margin: 0 0 4rem 0;
}

/* Hero Cards */
.heroes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.hero-card {
  background: rgba(26, 29, 53, 0.8);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.9rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.hero-card.hovered {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.hero-card.hovered::before {
  opacity: 1;
}

.hero-image-wrapper {
  width: 100%;
  aspect-ratio: 4.2/5;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  margin-bottom: 0.7rem;
  transition: all 0.4s ease;
}

.cyan-glow .hero-image {
  transition: all 0.4s ease;
}

.hero-card.hovered .cyan-glow {
  box-shadow: 0 0 40px rgba(0, 191, 255, 0.8), 0 0 80px rgba(0, 191, 255, 0.5);
  border: 2px solid #00bfff;
}

.yellow-glow .hero-image {
  transition: all 0.4s ease;
}

.hero-card.hovered .yellow-glow {
  box-shadow: 0 0 40px rgba(255, 179, 0, 0.8), 0 0 80px rgba(255, 179, 0, 0.5);
  border: 2px solid #ffb300;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ffb300 0%, #ff9500 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(255, 179, 0, 0.4);
}

.hero-content {
  text-align: center;
}

.hero-name {
  font-size: 1.3rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.2rem 0;
  font-family: 'Poppins', sans-serif;
}

.hero-title {
  font-size: 0.95rem;
  color: #00bfff;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
}

.hero-alias {
  font-size: 0.85rem;
  color: #ffb300;
  font-style: italic;
  margin: 0 0 0.6rem 0;
}

.hero-power {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 179, 0, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  margin: 0 0 0.7rem 0;
  font-weight: 600;
  color: #ffb300;
  font-size: 0.85rem;
}

.hero-power i {
  font-size: 1rem;
}

.hero-bio {
  font-size: 0.8rem;
  color: #d1d5db;
  line-height: 1.4;
  margin: 0.6rem 0 0 0;
}

/* Squad Section */
.squad-section {
  margin-top: 3rem;
}

.squad-title {
  font-size: 2.5rem;
  font-weight: 900;
  text-align: center;
  color: #ffb300;
  margin: 0 0 3rem 0;
  font-family: 'Poppins', sans-serif;
}

.squad-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.squad-card {
  background: rgba(26, 29, 53, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.squad-card.hovered {
  transform: translateY(-8px);
  border-color: #00bfff;
  box-shadow: 0 15px 30px rgba(0, 191, 255, 0.3);
}

.squad-image-wrapper {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.squad-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.squad-card.hovered .squad-image {
  transform: scale(1.1);
}

.squad-content {
  text-align: center;
}

.squad-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-family: 'Poppins', sans-serif;
}

.squad-role {
  font-size: 1rem;
  color: #00bfff;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
}

.squad-description {
  font-size: 0.9rem;
  color: #9ca3af;
  margin: 0;
}

/* ================================
   SECTION 3: CAREERS
   ================================ */
.careers-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(0, 191, 255, 0.1) 0%, rgba(255, 179, 0, 0.1) 100%);
  position: relative;
}

.careers-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(90deg, rgba(0, 191, 255, 0.03) 1px, transparent 1px),
    linear-gradient(rgba(0, 191, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.careers-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.careers-content {
  text-align: center;
}

.hiring-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
}

.hiring-icon {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #00bfff 0%, #ffb300 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: #ffffff;
  box-shadow: 0 20px 40px rgba(0, 191, 255, 0.4);
  position: relative;
  z-index: 2;
  animation: iconFloat 3s ease-in-out infinite;
}

.icon-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(0, 191, 255, 0.3);
  animation: pulse 2s ease-out infinite;
}

@keyframes iconFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0;
  }
}

.careers-headline {
  font-size: 3.5rem;
  font-weight: 900;
  color: #00bfff;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
}

.careers-subtitle {
  font-size: 1.5rem;
  color: #ffb300;
  font-weight: 600;
  margin: 0 0 3rem 0;
}

.impact-narrative {
  background: rgba(26, 29, 53, 0.6);
  padding: 3rem;
  border-radius: 20px;
  border: 2px solid rgba(0, 191, 255, 0.3);
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
}

.impact-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e5e7eb;
  margin: 0 0 1.5rem 0;
  text-align: left;
}

.impact-text:last-child {
  margin-bottom: 0;
}

.stat-highlight {
  color: #ffb300;
  font-weight: 700;
  font-size: 1.3rem;
}

.mission-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.mission-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 600;
}

.mission-item i {
  font-size: 2.5rem;
  color: #00bfff;
}

.cta-section {
  margin-top: 3rem;
}

.mission-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(135deg, #ffb300 0%, #ff9500 100%);
  color: #000000;
  font-size: 1.3rem;
  font-weight: 900;
  padding: 1.2rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(255, 179, 0, 0.4);
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}

.mission-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 40px rgba(255, 179, 0, 0.6);
}

.mission-button:active {
  transform: translateY(-1px) scale(1.02);
}

.button-text {
  position: relative;
  z-index: 2;
}

.mission-button i {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.mission-button:hover i {
  transform: translateX(5px);
}

.electric-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 70%
  );
  background-size: 200% 200%;
  animation: electric 3s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mission-button:hover .electric-effect {
  opacity: 1;
}

@keyframes electric {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.contact-info {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: #9ca3af;
  margin: 0;
}

.contact-item i {
  font-size: 1.5rem;
  color: #00bfff;
}

.contact-item a {
  color: #e5e7eb;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #ffb300;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1024px) {
  .page-title {
    font-size: 3rem;
  }

  .vision-card {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .vision-headline {
    font-size: 2.2rem;
  }

  .team-headline {
    font-size: 2.8rem;
  }

  .heroes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .careers-headline {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 4rem 1.5rem 2rem;
  }

  .page-title {
    font-size: 2.5rem;
    letter-spacing: 2px;
  }

  .vision-section {
    padding: 3rem 1.5rem;
  }

  .vision-card {
    padding: 2rem;
  }

  .vision-headline {
    font-size: 1.8rem;
  }

  .narrative-block {
    padding: 1.5rem;
  }

  .narrative-text {
    font-size: 1rem;
  }

  .team-section {
    padding: 3rem 1.5rem;
  }

  .team-headline {
    font-size: 2.2rem;
  }

  .team-subtitle {
    font-size: 1.1rem;
  }

  .heroes-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .squad-grid {
    grid-template-columns: 1fr;
  }

  .careers-section {
    padding: 4rem 1.5rem;
  }

  .careers-headline {
    font-size: 2.2rem;
  }

  .careers-subtitle {
    font-size: 1.2rem;
  }

  .impact-narrative {
    padding: 2rem;
  }

  .impact-text {
    font-size: 1rem;
  }

  .mission-features {
    gap: 2rem;
  }

  .mission-button {
    font-size: 1.1rem;
    padding: 1rem 2rem;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
