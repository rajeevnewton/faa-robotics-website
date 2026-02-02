<template>
  <div class="competition-page">
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
          <h1 class="main-title">CHATHURVIDHA</h1>
          <div class="title-glow"></div>
        </div>
        <p class="subtitle">The Four-Fold Innovation Challenge</p>
        <p class="slogan">Think. Create. Express. Compete.</p>
        <div class="hero-badge">
          <i class="fas fa-trophy"></i>
          <span>Registration Open</span>
        </div>
      </div>

      <div class="scroll-down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- SECTION 1: THE 4 BATTLE ZONES -->
    <section id="zones-section" class="zones-section">
      <div class="zones-container">
        <div class="zones-header">
          <h2 class="section-title">
            <span class="title-accent">The 4 Battle Zones</span>
          </h2>
          <p class="section-subtitle">Choose Your Arena & Prove Your Worth</p>
          <div class="title-underline"></div>
        </div>

        <div class="zones-grid">
          <!-- ZONE 1: STEM INNOVATOR -->
          <div class="zone-card stem-zone" @mouseenter="hoveredZone = 'stem'" @mouseleave="hoveredZone = null">
            <div class="zone-glow" :class="{ active: hoveredZone === 'stem' }"></div>
            
            <div class="zone-image">
              <img src="/assets/Student zone/stem innovator.jpg" alt="STEM Innovator">
              <div class="image-overlay"></div>
            </div>

            <div class="zone-content">
              <div class="zone-header">
                <div class="zone-icon stem-icon">
                  <i class="fas fa-robot"></i>
                </div>
                <div class="zone-number">01</div>
              </div>

              <h3 class="zone-title">STEM INNOVATOR</h3>
              <p class="zone-brief">Bring your ideas to life.</p>

              <div class="zone-details">
                <div class="detail-item">
                  <i class="fas fa-lightbulb"></i>
                  <span><strong>Criteria:</strong> Working Models or Idea Presentations (Robotics, AI, Sustainability)</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-medal"></i>
                  <span><strong>Judged On:</strong> Creativity, Impact, Clarity</span>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLScXCNeQPksM-NIptRdTaXmHLS1F51liy-_qayXh9CfLlEDTZg/viewform?usp=header" target="_blank" class="zone-button stem-button">
                <span>Register Model</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- ZONE 2: CONCEPT-BASED DRAWING -->
          <div class="zone-card drawing-zone" @mouseenter="hoveredZone = 'drawing'" @mouseleave="hoveredZone = null">
            <div class="zone-glow" :class="{ active: hoveredZone === 'drawing' }"></div>
            
            <div class="zone-image">
              <img src="/assets/Student zone/Concept  based drawing.jpg" alt="Concept-Based Drawing">
              <div class="image-overlay"></div>
            </div>

            <div class="zone-content">
              <div class="zone-header">
                <div class="zone-icon drawing-icon">
                  <i class="fas fa-palette"></i>
                </div>
                <div class="zone-number">02</div>
              </div>

              <h3 class="zone-title">CONCEPT-BASED DRAWING</h3>
              <p class="zone-brief">Visualize the Future.</p>

              <div class="zone-details">
                <div class="detail-item">
                  <i class="fas fa-paint-brush"></i>
                  <span><strong>Criteria:</strong> Drawings on Tech, SDGs, or Social Awareness</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-clock"></i>
                  <span><strong>Format:</strong> 1 Hour Time Limit (Offline or Online Scan)</span>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLScBRIY8ocWWCaRUy6dER-waR-TJ3ZDxLseGq7sg1kBIpmbbSA/viewform?usp=header" target="_blank" class="zone-button drawing-button">
                <span>Submit Art Entry</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- ZONE 3: TECH & INNOVATION QUIZ -->
          <div class="zone-card quiz-zone" @mouseenter="hoveredZone = 'quiz'" @mouseleave="hoveredZone = null">
            <div class="zone-glow" :class="{ active: hoveredZone === 'quiz' }"></div>
            
            <div class="zone-image">
              <img src="/assets/Student zone/tech innovation quiz.jpg" alt="Tech & Innovation Quiz">
              <div class="image-overlay"></div>
            </div>

            <div class="zone-content">
              <div class="zone-header">
                <div class="zone-icon quiz-icon">
                  <i class="fas fa-brain"></i>
                </div>
                <div class="zone-number">03</div>
              </div>

              <h3 class="zone-title">TECH & INNOVATION QUIZ</h3>
              <p class="zone-brief">Test Your Knowledge.</p>

              <div class="zone-details">
                <div class="detail-item">
                  <i class="fas fa-question-circle"></i>
                  <span><strong>Criteria:</strong> Science, AI, Robotics, GK</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-layer-group"></i>
                  <span><strong>Format:</strong> Prelims → Buzzer Round → Rapid Fire</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-users"></i>
                  <span><strong>Categories:</strong> Junior (School) & Senior (College)</span>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdD8aN6m7T67fGKAycOeFSjArfpOXrUhjsux3QTTxlIKfQ1wA/viewform?usp=header" target="_blank" class="zone-button quiz-button">
                <span>Register for Quiz</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <!-- ZONE 4: VOICE FOR THE PLANET -->
          <div class="zone-card voice-zone" @mouseenter="hoveredZone = 'voice'" @mouseleave="hoveredZone = null">
            <div class="zone-glow" :class="{ active: hoveredZone === 'voice' }"></div>
            
            <div class="zone-image">
              <img src="/assets/Student zone/voice of the planet.jpg" alt="Voice for the Planet">
              <div class="image-overlay"></div>
            </div>

            <div class="zone-content">
              <div class="zone-header">
                <div class="zone-icon voice-icon">
                  <i class="fas fa-globe-americas"></i>
                </div>
                <div class="zone-number">04</div>
              </div>

              <h3 class="zone-title">VOICE FOR THE PLANET</h3>
              <p class="zone-brief">Speak for the Earth.</p>

              <div class="zone-details">
                <div class="detail-item">
                  <i class="fas fa-leaf"></i>
                  <span><strong>Criteria:</strong> Reels/Videos (&lt;60 sec) on Plastic, Climate Change, Green Energy</span>
                </div>
                <div class="detail-item">
                  <i class="fas fa-video"></i>
                  <span><strong>Format:</strong> Original Footage, Animation, or Voiceover</span>
                </div>
              </div>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdLkOqHahLVaJWOkACzs9wghuz9RhJCCh3b_m_YBtDR4Mz21w/viewform?usp=header" target="_blank" class="zone-button voice-button">
                <span>Upload Reel</span>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE LOOT (Awards) -->
    <section class="awards-section">
      <div class="awards-container">
        <div class="awards-header">
          <h2 class="section-title">
            <span class="title-accent">Rewards of Glory</span>
          </h2>
          <p class="awards-subtitle">Champions Don't Just Win — They Rule</p>
          <div class="title-underline"></div>
        </div>

        <div class="awards-grid">
          <div class="award-card" v-for="(award, index) in awards" :key="index">
            <div class="award-icon-container">
              <i :class="award.icon"></i>
              <div class="icon-glow"></div>
            </div>
            <h4 class="award-title">{{ award.title }}</h4>
            <p class="award-description">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: HOW TO PARTICIPATE -->
    <section class="participate-section">
      <div class="participate-container">
        <div class="participate-header">
          <h2 class="section-title">
            <span class="title-accent">How To Participate</span>
          </h2>
          <p class="participate-subtitle">3 Simple Steps to Victory</p>
          <div class="title-underline"></div>
        </div>

        <div class="steps-container">
          <div class="step-card" v-for="(step, index) in steps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-description">{{ step.description }}</p>
            <div class="step-connector" v-if="index < steps.length - 1">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div class="cta-container">
          <a href="#zones-section" @click.prevent="scrollToTop" class="cta-button">
            <i class="fas fa-rocket"></i>
            <span>Choose Your Battle Zone</span>
          </a>
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

const hoveredZone = ref(null)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const awards = [
  {
    icon: 'fas fa-trophy',
    title: 'Innovation Champion Trophy',
    description: 'For the Best School/College showcasing excellence across all events'
  },
  {
    icon: 'fas fa-coins',
    title: 'Cash Prizes & Medals',
    description: 'Exciting monetary rewards and medals for top performers in each category'
  },
  {
    icon: 'fas fa-certificate',
    title: 'Certificates for ALL',
    description: 'Every participant receives a certificate of participation'
  },
  {
    icon: 'fas fa-chalkboard-teacher',
    title: 'Special Mentor Awards',
    description: 'Recognition for teachers who guide and mentor winning teams'
  }
]

const steps = [
  {
    icon: 'fas fa-crosshairs',
    title: 'Select Your Event',
    description: 'Choose one (or more) of the 4 battle zones based on your passion and skills'
  },
  {
    icon: 'fas fa-user-plus',
    title: 'Register',
    description: 'Click the button and fill the form. Participate individually or as a team'
  },
  {
    icon: 'fas fa-flag-checkered',
    title: 'Compete & Win',
    description: 'Show up (Online/Offline), showcase your talent, and claim victory'
  }
]
</script>

<style scoped>
/* ================================
   GLOBAL STYLES
   ================================ */
.competition-page {
  background: #0a0e1a;
  min-height: 100vh;
  color: #ffffff;
  overflow-x: hidden;
}

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

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0a0e1a 0%, #1a1f35 50%, #0a0e1a 100%);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(102, 255, 153, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 255, 153, 0.05) 1px, transparent 1px);
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
  border-color: rgba(102, 255, 153, 0.3);
  top: 10%;
  left: 10%;
}

.circle-2 {
  width: 300px;
  height: 300px;
  border-color: rgba(255, 215, 0, 0.3);
  bottom: 15%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 250px;
  height: 250px;
  border-color: rgba(102, 126, 234, 0.3);
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
  font-size: 6rem;
  font-weight: 900;
  letter-spacing: 8px;
  margin: 0;
  background: linear-gradient(135deg, #66ff99 0%, #ffd700 50%, #66ff99 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease-in-out infinite, textGlow 2s ease-in-out infinite;
  text-shadow: 0 0 60px rgba(102, 255, 153, 0.5);
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
  background: radial-gradient(circle, rgba(102, 255, 153, 0.3) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

.subtitle {
  font-size: 2rem;
  margin: 1.5rem 0;
  color: #ffd700;
  letter-spacing: 3px;
  font-weight: 600;
}

.slogan {
  font-size: 1.5rem;
  color: #66ff99;
  font-style: italic;
  margin-bottom: 2rem;
  letter-spacing: 2px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #66ff99 0%, #00cc66 100%);
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a0e1a;
  box-shadow: 0 8px 30px rgba(102, 255, 153, 0.4);
  animation: badgePulse 2s ease-in-out infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hero-badge i {
  font-size: 1.5rem;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
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
  color: #66ff99;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-15px); }
}

/* ================================
   SECTION COMMON STYLES
   ================================ */
.section-title {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
}

.title-accent {
  background: linear-gradient(135deg, #66ff99 0%, #ffd700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle,
.awards-subtitle,
.participate-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #9ca3af;
  margin-bottom: 1.5rem;
}

.title-underline {
  width: 150px;
  height: 4px;
  background: linear-gradient(90deg, #66ff99, #ffd700);
  margin: 1rem auto 2rem;
  border-radius: 2px;
  box-shadow: 0 0 20px rgba(102, 255, 153, 0.5);
}

/* ================================
   ZONES SECTION
   ================================ */
.zones-section {
  padding: 2rem 2rem;
  background: linear-gradient(180deg, #0a0e1a 0%, #151923 100%);
}

.zones-container {
  max-width: 1600px;
  margin: 0 auto;
}

.zones-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.zone-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(102, 255, 153, 0.2);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.zone-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 80px rgba(102, 255, 153, 0.3);
}

.stem-zone:hover {
  border-color: #f59e0b;
  box-shadow: 0 30px 80px rgba(245, 158, 11, 0.3);
}

.drawing-zone:hover {
  border-color: #ec4899;
  box-shadow: 0 30px 80px rgba(236, 72, 153, 0.3);
}

.quiz-zone:hover {
  border-color: #3b82f6;
  box-shadow: 0 30px 80px rgba(59, 130, 246, 0.3);
}

.voice-zone:hover {
  border-color: #10b981;
  box-shadow: 0 30px 80px rgba(16, 185, 129, 0.3);
}

.zone-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, rgba(102, 255, 153, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.zone-glow.active {
  opacity: 1;
  animation: glowRotate 4s linear infinite;
}

@keyframes glowRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.zone-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.zone-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.zone-card:hover .zone-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 14, 26, 0.9) 100%);
}

.zone-content {
  padding: 2.5rem;
  position: relative;
}

.zone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.zone-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  transition: all 0.3s ease;
}

.zone-card:hover .zone-icon {
  transform: scale(1.1) rotate(10deg);
}

.stem-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.drawing-icon {
  background: linear-gradient(135deg, #ec4899, #db2777);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
}

.quiz-icon {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.voice-icon {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.zone-number {
  font-size: 3rem;
  font-weight: 900;
  color: rgba(102, 255, 153, 0.2);
  line-height: 1;
}

.zone-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.zone-brief {
  font-size: 1.1rem;
  color: #66ff99;
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.zone-details {
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
}

.detail-item i {
  font-size: 1.2rem;
  color: #66ff99;
  margin-top: 0.2rem;
  min-width: 20px;
}

.detail-item span {
  color: #d1d5db;
  line-height: 1.6;
  font-size: 0.95rem;
}

.zone-status {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid #10b981;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  color: #10b981;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.status-badge.open i {
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.zone-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 100%;
  padding: 1.2rem;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1.1rem;
  text-decoration: none;
  color: #0a0e1a;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stem-button {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
}

.stem-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(245, 158, 11, 0.6);
}

.drawing-button {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
}

.drawing-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(236, 72, 153, 0.6);
}

.quiz-button {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
}

.quiz-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.6);
}

.voice-button {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

.voice-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.6);
}

.zone-button i {
  transition: transform 0.3s ease;
}

.zone-button:hover i {
  transform: translateX(5px);
}

/* ================================
   AWARDS SECTION
   ================================ */
.awards-section {
  padding: 2rem 2rem;
  background: rgba(0, 0, 0, 0.3);
}

.awards-container {
  max-width: 1400px;
  margin: 0 auto;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.award-card {
  position: relative;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(102, 255, 153, 0.2);
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
}

.award-card:hover {
  transform: translateY(-10px);
  border-color: #ffd700;
  box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
}

.award-icon-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.award-icon-container i {
  font-size: 3.5rem;
  color: #ffd700;
  z-index: 2;
  transition: all 0.3s ease;
}

.award-card:hover .award-icon-container i {
  transform: scale(1.2) rotate(10deg);
}

.icon-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

.award-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.award-description {
  color: #9ca3af;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* ================================
   PARTICIPATE SECTION
   ================================ */
.participate-section {
  padding: 2rem 2rem;
  background: linear-gradient(180deg, #151923 0%, #0a0e1a 100%);
}

.participate-container {
  max-width: 1400px;
  margin: 0 auto;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.step-card {
  position: relative;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 2px solid rgba(102, 255, 153, 0.2);
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  border-color: #66ff99;
  box-shadow: 0 20px 60px rgba(102, 255, 153, 0.3);
}

.step-number {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #66ff99, #00cc66);
  border-radius: 50%;
  font-size: 1.8rem;
  font-weight: 900;
  color: #0a0e1a;
  box-shadow: 0 4px 15px rgba(102, 255, 153, 0.4);
}

.step-icon {
  width: 80px;
  height: 80px;
  margin: 2rem auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(102, 255, 153, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.step-card:hover .step-icon {
  transform: scale(1.1) rotate(5deg);
  background: rgba(102, 255, 153, 0.2);
}

.step-icon i {
  font-size: 2.5rem;
  color: #66ff99;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.step-description {
  color: #9ca3af;
  line-height: 1.6;
  font-size: 1rem;
}

.step-connector {
  position: absolute;
  top: 50%;
  right: -3rem;
  transform: translateY(-50%);
  font-size: 2rem;
  color: rgba(102, 255, 153, 0.3);
}

.cta-container {
  display: flex;
  justify-content: center;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #66ff99 0%, #00cc66 100%);
  color: #0a0e1a;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.3rem;
  font-weight: 700;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(102, 255, 153, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 12px 40px rgba(102, 255, 153, 0.6);
}

.cta-button i {
  font-size: 1.5rem;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1400px) {
  .zones-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .main-title {
    font-size: 4.5rem;
    letter-spacing: 4px;
  }

  .section-title {
    font-size: 2.8rem;
  }

  .steps-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .step-connector {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-header {
    height: 80vh;
  }

  .main-title {
    font-size: 3rem;
    letter-spacing: 2px;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .slogan {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .zones-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .zones-section,
  .awards-section,
  .participate-section {
    padding: 1.5rem 1.5rem;
  }

  .zone-content {
    padding: 2rem;
  }

  .zone-title {
    font-size: 1.5rem;
  }

  .awards-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .cta-button {
    padding: 1.2rem 2rem;
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .slogan {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .zone-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  .zone-number {
    font-size: 2rem;
  }

  .zone-title {
    font-size: 1.3rem;
  }

  .step-card {
    padding: 2rem;
  }
}
</style>
