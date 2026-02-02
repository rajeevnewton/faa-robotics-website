<template>
  <div class="internships-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="hero-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <h1 class="hero-title">
          Bridge the Gap Between <span class="gradient-text">Degree & Industry</span>
        </h1>
        <p class="hero-subtitle">
          Real-time Projects. Expert Mentorship. Certified Experience.
        </p>
        <div class="hero-badges">
          <div class="badge">
            <i class="fas fa-briefcase"></i>
            <span>Internships</span>
          </div>
          <div class="badge">
            <i class="fas fa-code"></i>
            <span>Skill Courses</span>
          </div>
          <div class="badge">
            <i class="fas fa-chalkboard-teacher"></i>
            <span>Workshops</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-section">
      <!-- Section 1: Internship Tracks -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <div>
          <h2 class="section-title">INTERNSHIP TRACKS</h2>
          <p class="section-subtitle">The Career Launchpad</p>
        </div>
      </div>

      <div class="internship-tracks">
        <!-- Track A: Sprint -->
        <div class="track-card sprint" data-aos="fade-up" data-aos-delay="100">
          <div class="track-badge">
            <i class="fas fa-bolt"></i>
            Short-Term
          </div>
          <div class="track-icon">
            <i class="fas fa-running"></i>
          </div>
          <h3 class="track-title">The Sprint</h3>
          <div class="track-duration">
            <i class="fas fa-clock"></i>
            1 Month
          </div>
          <div class="track-details">
            <div class="detail-item">
              <i class="fas fa-bullseye"></i>
              <span><strong>Focus:</strong> Fundamentals & Mini-Projects</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-user-graduate"></i>
              <span><strong>Best For:</strong> Summer/Winter Breaks</span>
            </div>
          </div>
          <a href="https://wa.me/919347206123?text=I'm interested in the 1 Month Sprint Internship" target="_blank" class="track-btn sprint-btn">
            <i class="fab fa-whatsapp"></i>
            Apply for 1 Month
          </a>
        </div>

        <!-- Track B: Deep Dive -->
        <div class="track-card deep-dive" data-aos="fade-up" data-aos-delay="200">
          <div class="track-badge featured">
            <i class="fas fa-star"></i>
            Most Popular
          </div>
          <div class="track-icon">
            <i class="fas fa-water"></i>
          </div>
          <h3 class="track-title">The Deep Dive</h3>
          <div class="track-duration">
            <i class="fas fa-clock"></i>
            3 Months
          </div>
          <div class="track-details">
            <div class="detail-item">
              <i class="fas fa-bullseye"></i>
              <span><strong>Focus:</strong> End-to-End Product Development (Design → Code → Build)</span>
            </div>
            <div class="detail-item">
              <i class="fas fa-user-graduate"></i>
              <span><strong>Best For:</strong> Final Year Projects</span>
            </div>
          </div>
          <a href="https://wa.me/919347206123?text=I'm interested in the 3 Month Deep Dive Internship" target="_blank" class="track-btn deep-dive-btn">
            <i class="fab fa-whatsapp"></i>
            Apply for 3 Months
          </a>
        </div>
      </div>

      <!-- Domains -->
      <div class="domains-section" data-aos="fade-up">
        <h3 class="domains-title">Available Domains</h3>
        <div class="domains-grid">
          <div class="domain-item">
            <i class="fas fa-robot"></i>
            <span>Robotics</span>
          </div>
          <div class="domain-item">
            <i class="fas fa-network-wired"></i>
            <span>IoT</span>
          </div>
          <div class="domain-item">
            <i class="fas fa-brain"></i>
            <span>AI/ML</span>
          </div>
          <div class="domain-item">
            <i class="fas fa-laptop-code"></i>
            <span>Software Dev</span>
          </div>
          <div class="domain-item">
            <i class="fas fa-cogs"></i>
            <span>Mech Design</span>
          </div>
        </div>
      </div>

      <!-- Section 2: Skill Courses -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-icon">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div>
          <h2 class="section-title">SKILL COURSES</h2>
          <p class="section-subtitle">Master Software & Hardware</p>
        </div>
      </div>

      <div class="skill-courses">
        <!-- Software Mastery -->
        <div class="course-card software" data-aos="fade-right">
          <div class="course-visual">
            <div class="code-simulation">
              <div class="code-line"><span class="keyword">import</span> numpy <span class="keyword">as</span> np</div>
              <div class="code-line"><span class="keyword">import</span> cv2</div>
              <div class="code-line"></div>
              <div class="code-line"><span class="keyword">def</span> <span class="function">detect_objects</span>():</div>
              <div class="code-line">    <span class="comment"># AI magic happens here</span></div>
              <div class="code-line">    <span class="keyword">return</span> results</div>
            </div>
          </div>
          <div class="course-content">
            <div class="course-header">
              <i class="fas fa-laptop-code"></i>
              <h3>SOFTWARE MASTERY</h3>
            </div>
            <div class="course-modules">
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>Python / C++ Programming</span>
              </div>
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>Computer Vision (OpenCV)</span>
              </div>
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>AI Fundamentals & ML Models</span>
              </div>
            </div>
            <div class="course-duration">
              <div class="duration-option">
                <i class="fas fa-clock"></i>
                <span>1 Month (Basic)</span>
              </div>
              <div class="duration-option">
                <i class="fas fa-clock"></i>
                <span>3 Months (Advanced)</span>
              </div>
            </div>
            <a href="https://github.com/rajeevnewton/Sensors" target="_blank" class="project-link">
              <i class="fab fa-github"></i>
              View Sample Project
            </a>
          </div>
        </div>

        <!-- Hardware Engineering -->
        <div class="course-card hardware" data-aos="fade-left">
          <div class="course-visual hardware-visual">
            <div class="circuit-animation">
              <i class="fas fa-microchip"></i>
              <div class="circuit-lines"></div>
            </div>
          </div>
          <div class="course-content">
            <div class="course-header">
              <i class="fas fa-tools"></i>
              <h3>HARDWARE ENGINEERING</h3>
            </div>
            <div class="course-modules">
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>PCB Design & Fabrication</span>
              </div>
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>Arduino / ESP32 / STM32</span>
              </div>
              <div class="module-item">
                <i class="fas fa-check-circle"></i>
                <span>Sensor Integration & IoT</span>
              </div>
            </div>
            <div class="course-duration">
              <div class="duration-option">
                <i class="fas fa-clock"></i>
                <span>1 Month (Basic)</span>
              </div>
              <div class="duration-option">
                <i class="fas fa-clock"></i>
                <span>3 Months (Advanced)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Workshop Gallery -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-icon">
          <i class="fas fa-chalkboard-teacher"></i>
        </div>
        <div>
          <h2 class="section-title">WORKSHOP GALLERY</h2>
          <p class="section-subtitle">The 4 Pillars of Hands-On Learning</p>
        </div>
      </div>

      <div class="workshops-grid">
        <!-- Drone Technology -->
        <div class="workshop-card" data-aos="fade-up" data-aos-delay="100">
          <div class="workshop-image">
            <img src="/assets/internships/drone.jpg" alt="Drone Technology Workshop" />
            <div class="workshop-overlay">
              <i class="fas fa-helicopter"></i>
            </div>
          </div>
          <div class="workshop-content">
            <h3 class="workshop-title">🚁 Drone Technology</h3>
            <p class="workshop-caption">Flight Dynamics & Assembly</p>
            <div class="workshop-meta">
              <div class="meta-item">
                <i class="fas fa-users"></i>
                <span>Colleges</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>1 Week</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Robotics & DIY -->
        <div class="workshop-card" data-aos="fade-up" data-aos-delay="200">
          <div class="workshop-image">
            <img src="/assets/internships/robotics.jpg" alt="Robotics Workshop" />
            <div class="workshop-overlay">
              <i class="fas fa-robot"></i>
            </div>
          </div>
          <div class="workshop-content">
            <h3 class="workshop-title">🤖 Robotics & DIY</h3>
            <p class="workshop-caption">Build your first bot</p>
            <div class="workshop-meta">
              <div class="meta-item">
                <i class="fas fa-school"></i>
                <span>Schools</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>1-2 Days</span>
              </div>
            </div>
          </div>
        </div>

        <!-- LED & Circuits -->
        <div class="workshop-card" data-aos="fade-up" data-aos-delay="300">
          <div class="workshop-image">
            <img src="/assets/internships/led.jpg" alt="LED & Circuits Workshop" />
            <div class="workshop-overlay">
              <i class="fas fa-lightbulb"></i>
            </div>
          </div>
          <div class="workshop-content">
            <h3 class="workshop-title">💡 LED & Circuits</h3>
            <p class="workshop-caption">The Art of Electronics</p>
            <div class="workshop-meta">
              <div class="meta-item">
                <i class="fas fa-user-graduate"></i>
                <span>Beginners</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>1 Day</span>
              </div>
            </div>
          </div>
        </div>

        <!-- IoT & Smart Systems -->
        <div class="workshop-card" data-aos="fade-up" data-aos-delay="400">
          <div class="workshop-image">
            <img src="/assets/internships/iot.jpg" alt="IoT Workshop" />
            <div class="workshop-overlay">
              <i class="fas fa-wifi"></i>
            </div>
          </div>
          <div class="workshop-content">
            <h3 class="workshop-title">📡 IoT & Smart Systems</h3>
            <p class="workshop-caption">Connecting the World</p>
            <div class="workshop-meta">
              <div class="meta-item">
                <i class="fas fa-graduation-cap"></i>
                <span>B.Tech Students</span>
              </div>
              <div class="meta-item">
                <i class="fas fa-calendar-alt"></i>
                <span>1 Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="workshop-cta" data-aos="fade-up">
        <a href="https://wa.me/919347206123?text=I want to host a workshop at my college" target="_blank" class="workshop-cta-btn">
          <i class="fas fa-university"></i>
          Host a Workshop at Your College
        </a>
      </div>

      <!-- Project Areas -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-icon">
          <i class="fas fa-project-diagram"></i>
        </div>
        <div>
          <h2 class="section-title">PROJECT AREAS</h2>
          <p class="section-subtitle">Technology Streams & Expertise</p>
        </div>
      </div>

      <div class="project-areas">
        <div class="project-area-card" data-aos="fade-up" data-aos-delay="100">
          <div class="area-icon robotics-icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3 class="area-title">🛠️ Robotics & Automation</h3>
          <ul class="area-list">
            <li><i class="fas fa-chevron-right"></i> Build and program autonomous robots</li>
            <li><i class="fas fa-chevron-right"></i> Sensor integration</li>
            <li><i class="fas fa-chevron-right"></i> Path-planning, control systems</li>
          </ul>
        </div>

        <div class="project-area-card" data-aos="fade-up" data-aos-delay="200">
          <div class="area-icon embedded-icon">
            <i class="fas fa-microchip"></i>
          </div>
          <h3 class="area-title">💻 Embedded Systems & IoT</h3>
          <ul class="area-list">
            <li><i class="fas fa-chevron-right"></i> Microcontrollers (Arduino, ESP32, STM32)</li>
            <li><i class="fas fa-chevron-right"></i> Sensor interfacing and communication protocols</li>
          </ul>
        </div>

        <div class="project-area-card" data-aos="fade-up" data-aos-delay="300">
          <div class="area-icon ai-icon">
            <i class="fas fa-brain"></i>
          </div>
          <h3 class="area-title">🤖 Artificial Intelligence & ML</h3>
          <ul class="area-list">
            <li><i class="fas fa-chevron-right"></i> Computer Vision (Python/OpenCV)</li>
            <li><i class="fas fa-chevron-right"></i> ML models for robotic perception</li>
          </ul>
        </div>

        <div class="project-area-card" data-aos="fade-up" data-aos-delay="400">
          <div class="area-icon software-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3 class="area-title">🧠 Software & Simulation</h3>
          <ul class="area-list">
            <li><i class="fas fa-chevron-right"></i> C/C++, Python based development</li>
            <li><i class="fas fa-chevron-right"></i> ROS/ROS2 fundamentals (optional guidance)</li>
          </ul>
        </div>

        <div class="project-area-card" data-aos="fade-up" data-aos-delay="500">
          <div class="area-icon mech-icon">
            <i class="fas fa-cube"></i>
          </div>
          <h3 class="area-title">🔧 Mechanical Design & Prototyping</h3>
          <ul class="area-list">
            <li><i class="fas fa-chevron-right"></i> CAD (SolidWorks / Fusion 360)</li>
            <li><i class="fas fa-chevron-right"></i> 3D printing and rapid prototyping basics</li>
          </ul>
        </div>
      </div>

      <div class="project-note" data-aos="fade-up">
        <i class="fas fa-info-circle"></i>
        <p>Projects are assigned based on student background and interests. Each project includes milestones, review sessions and a final demonstration.</p>
      </div>

      <!-- Section 4: Certification -->
      <div class="section-header" data-aos="fade-up">
        <div class="section-icon">
          <i class="fas fa-certificate"></i>
        </div>
        <div>
          <h2 class="section-title">CERTIFICATION</h2>
          <p class="section-subtitle">Verified Industry-Ready Credentials</p>
        </div>
      </div>

      <div class="certification-section" data-aos="fade-up">
        <div class="certificate-preview">
          <img src="/assets/internships/certificate.jpg" alt="FAA Robotics Certificate" />
        </div>
        <div class="certificate-info">
          <div class="cert-badge">
            <i class="fas fa-award"></i>
          </div>
          <h3>Earn Your Industry Certificate</h3>
          <p>Upon successful completion of your internship or course, you'll receive a verified certificate from <strong>FAA Robotics Pvt Ltd</strong> detailing:</p>
          <ul class="cert-features">
            <li><i class="fas fa-check-double"></i> Your project work and contributions</li>
            <li><i class="fas fa-check-double"></i> Technical skills acquired</li>
            <li><i class="fas fa-check-double"></i> Duration and domain expertise</li>
            <li><i class="fas fa-check-double"></i> Mentor evaluation and recommendations</li>
          </ul>
          <div class="cert-value">
            <i class="fas fa-briefcase"></i>
            <span>Boost your resume with real industry experience</span>
          </div>
        </div>
      </div>

      <!-- Final CTA -->
      <div class="final-cta" data-aos="fade-up">
        <div class="cta-content">
          <h2>Ready to Level Up Your Career?</h2>
          <p>Join hundreds of students who have kickstarted their tech careers with FAA Robotics</p>
          <a href="https://wa.me/919347206123?text=I'm interested in FAA Robotics Internships and Workshops" target="_blank" class="cta-btn">
            <i class="fab fa-whatsapp"></i>
            Get Started Today
          </a>
          <div class="contact-info">
            <i class="fas fa-phone"></i>
            <span>+91 9347206123</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Footer from '../components/Footer.vue'

onMounted(() => {
  // Initialize AOS animations if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }
})
</script>

<style scoped>
/* ================================
   BASE STYLES
   ================================ */
.internships-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
  position: relative;
  overflow-x: hidden;
}

/* ================================
   HERO SECTION
   ================================ */
.hero-section {
  position: relative;
  padding: 8rem 2rem 4rem 2rem;
  text-align: center;
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
  animation: patternPulse 8s ease-in-out infinite;
}

@keyframes patternPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 3s ease-in-out infinite;
  box-shadow: 0 10px 40px rgba(255, 107, 107, 0.4);
}

.hero-icon i {
  font-size: 2.5rem;
  color: #ffffff;
}

@keyframes floatAnimation {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

.badge i {
  color: #4ecdc4;
}

/* ================================
   MAIN SECTION
   ================================ */
.main-section {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

/* ================================
   SECTION HEADERS
   ================================ */
.section-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 4rem 0 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.section-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.section-icon i {
  font-size: 1.75rem;
  color: #ffffff;
}

.section-title {
  font-size: 2rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0.25rem 0 0 0;
  font-style: italic;
}

/* ================================
   INTERNSHIP TRACKS
   ================================ */
.internship-tracks {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.track-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.track-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
  pointer-events: none;
  z-index: 0;
}

.track-card:hover::before {
  left: 100%;
}

.track-card.sprint {
  border-color: rgba(78, 205, 196, 0.3);
}

.track-card.sprint:hover {
  border-color: rgba(78, 205, 196, 0.6);
  box-shadow: 0 20px 60px rgba(78, 205, 196, 0.3);
  transform: translateY(-5px);
}

.track-card.deep-dive {
  border-color: rgba(255, 107, 107, 0.3);
}

.track-card.deep-dive:hover {
  border-color: rgba(255, 107, 107, 0.6);
  box-shadow: 0 20px 60px rgba(255, 107, 107, 0.3);
  transform: translateY(-5px);
}

.track-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(78, 205, 196, 0.2);
  border: 1px solid rgba(78, 205, 196, 0.5);
  border-radius: 20px;
  color: #4ecdc4;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
}

.track-badge.featured {
  background: rgba(255, 215, 0, 0.2);
  border-color: rgba(255, 215, 0, 0.5);
  color: #ffd700;
}

.track-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
}

.track-icon i {
  font-size: 2rem;
  color: #ffffff;
}

.track-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
  z-index: 1;
}

.track-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  width: fit-content;
  position: relative;
  z-index: 1;
}

.track-duration i {
  color: #4ecdc4;
}

.track-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-item i {
  color: #4ecdc4;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.detail-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
}

.track-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.sprint-btn {
  background: linear-gradient(135deg, #4ecdc4, #44b3a8);
  color: #ffffff;
  box-shadow: 0 5px 20px rgba(78, 205, 196, 0.3);
}

.sprint-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(78, 205, 196, 0.5);
}

.deep-dive-btn {
  background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
  color: #ffffff;
  box-shadow: 0 5px 20px rgba(255, 107, 107, 0.3);
}

.deep-dive-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 107, 107, 0.5);
}

/* ================================
   DOMAINS SECTION
   ================================ */
.domains-section {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 3rem;
}

.domains-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
}

.domains-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}

.domain-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.domain-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(78, 205, 196, 0.3);
  transform: translateY(-5px);
}

.domain-item i {
  font-size: 2rem;
  color: #4ecdc4;
}

.domain-item span {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  text-align: center;
}

/* ================================
   SKILL COURSES
   ================================ */
.skill-courses {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid;
  transition: all 0.4s ease;
}

.course-card.software {
  border-color: rgba(78, 205, 196, 0.3);
}

.course-card.software:hover {
  border-color: rgba(78, 205, 196, 0.6);
  box-shadow: 0 20px 60px rgba(78, 205, 196, 0.3);
  transform: translateY(-5px);
}

.course-card.hardware {
  border-color: rgba(255, 140, 0, 0.3);
}

.course-card.hardware:hover {
  border-color: rgba(255, 140, 0, 0.6);
  box-shadow: 0 20px 60px rgba(255, 140, 0, 0.3);
  transform: translateY(-5px);
}

.course-visual {
  height: 200px;
  background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(78, 205, 196, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hardware-visual {
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 140, 0, 0.05));
}

.code-simulation {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  width: 100%;
  max-width: 400px;
}

.code-line {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  animation: codeTyping 3s ease-in-out infinite;
}

@keyframes codeTyping {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.keyword {
  color: #ff6b6b;
  font-weight: 700;
}

.function {
  color: #4ecdc4;
  font-weight: 700;
}

.comment {
  color: rgba(255, 255, 255, 0.5);
  font-style: italic;
}

.circuit-animation {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circuit-animation i {
  font-size: 4rem;
  color: #ff8c00;
  z-index: 2;
  animation: pulse 2s ease-in-out infinite;
}

.circuit-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #ff8c00;
  border-radius: 10px;
  animation: circuitPulse 2s ease-out infinite;
}

@keyframes circuitPulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.course-content {
  padding: 2rem;
}

.course-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.course-header i {
  font-size: 2rem;
  color: #4ecdc4;
}

.hardware .course-header i {
  color: #ff8c00;
}

.course-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.course-modules {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.module-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.module-item i {
  color: #4ecdc4;
  flex-shrink: 0;
}

.module-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.course-duration {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.duration-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 600;
}

.duration-option i {
  color: #4ecdc4;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #4ecdc4;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(78, 205, 196, 0.1);
  border-color: rgba(78, 205, 196, 0.3);
  transform: translateX(5px);
}

/* ================================
   WORKSHOPS GALLERY
   ================================ */
.workshops-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.workshop-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.workshop-card:hover {
  border-color: rgba(78, 205, 196, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(78, 205, 196, 0.3);
}

.workshop-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
}

.workshop-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.workshop-card:hover .workshop-image img {
  transform: scale(1.1);
}

.workshop-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(78, 205, 196, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.workshop-card:hover .workshop-overlay {
  opacity: 1;
}

.workshop-overlay i {
  font-size: 2rem;
  color: #4ecdc4;
}

.workshop-content {
  padding: 1.5rem;
}

.workshop-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.workshop-caption {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-bottom: 1rem;
}

.workshop-meta {
  display: flex;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
}

.meta-item i {
  color: #4ecdc4;
}

.workshop-cta {
  text-align: center;
  margin-bottom: 3rem;
}

.workshop-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(255, 107, 107, 0.3);
}

.workshop-cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(255, 107, 107, 0.5);
}

/* ================================
   PROJECT AREAS
   ================================ */
.project-areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.project-area-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.project-area-card:hover {
  border-color: rgba(78, 205, 196, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(78, 205, 196, 0.2);
}

.area-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.robotics-icon {
  background: linear-gradient(135deg, #ff6b6b, #ee5a5a);
}

.embedded-icon {
  background: linear-gradient(135deg, #4ecdc4, #44b3a8);
}

.ai-icon {
  background: linear-gradient(135deg, #ffd700, #ffb300);
}

.software-icon {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.mech-icon {
  background: linear-gradient(135deg, #ff8c00, #ff6347);
}

.area-icon i {
  font-size: 2rem;
  color: #ffffff;
}

.area-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.area-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.area-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

.area-list i {
  color: #4ecdc4;
  margin-top: 0.3rem;
  flex-shrink: 0;
  font-size: 0.75rem;
}

.project-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(78, 205, 196, 0.1);
  border: 2px solid rgba(78, 205, 196, 0.3);
  border-radius: 15px;
  margin-bottom: 3rem;
}

.project-note i {
  font-size: 1.5rem;
  color: #4ecdc4;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.project-note p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* ================================
   CERTIFICATION SECTION
   ================================ */
.certification-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid rgba(255, 215, 0, 0.2);
  margin-bottom: 3rem;
}

.certificate-preview {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.certificate-preview img {
  width: 100%;
  height: auto;
  display: block;
}

.cert-badge {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ffd700, #ffb300);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.cert-badge i {
  font-size: 2rem;
  color: #0a0e27;
}

.certificate-info h3 {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.certificate-info p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cert-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cert-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.cert-features i {
  color: #ffd700;
  font-size: 1rem;
}

.cert-value {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.cert-value i {
  font-size: 1.5rem;
  color: #ffd700;
}

.cert-value span {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* ================================
   FINAL CTA
   ================================ */
.final-cta {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.cta-content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 3rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  font-weight: 800;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 40px rgba(37, 211, 102, 0.3);
  margin-bottom: 1rem;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(37, 211, 102, 0.5);
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-info i {
  color: #4ecdc4;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1200px) {
  .internship-tracks,
  .skill-courses {
    grid-template-columns: 1fr;
  }

  .domains-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .project-areas {
    grid-template-columns: repeat(2, 1fr);
  }

  .workshops-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 6rem 1.5rem 3rem 1.5rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-badges {
    gap: 1rem;
  }

  .main-section {
    padding: 1rem;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .domains-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .workshops-grid {
    grid-template-columns: 1fr;
  }

  .project-areas {
    grid-template-columns: 1fr;
  }

  .certification-section {
    grid-template-columns: 1fr;
    padding: 2rem;
  }

  .final-cta {
    padding: 3rem 1.5rem;
  }

  .cta-content h2 {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .hero-icon {
    width: 60px;
    height: 60px;
  }

  .hero-icon i {
    font-size: 2rem;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .badge {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  .track-card {
    padding: 1.5rem;
  }

  .domains-grid {
    grid-template-columns: 1fr;
  }
}
</style>
