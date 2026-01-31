5<template>
  <div class="robots-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="hero-icon">
          <i class="fas fa-robot"></i>
        </div>
        <h1 class="hero-title">
          Robots <span class="gradient-text">for Sale</span>
        </h1>
        <p class="hero-subtitle">
          Service-ready robots & educational kits for every purpose
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-section">
      <!-- Robots Grid -->
      <div class="robots-container">
        <!-- Unit 01: Welcome Robots -->
        <div class="robot-card welcome" data-aos="fade-up">
          <div class="status-badge service-ready">
            <i class="fas fa-check-circle"></i>
            Service Ready
          </div>
          <div class="robot-image">
            <img src="/assets/robots/welcome.jpg" alt="Welcome Robot" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 01:</span> WELCOME ROBOTS
            </h2>
            <div class="robot-subtitle">👋 "The Frontline Greeter."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Welcome your guests with a smile! Perfect for schools, events, and institutions.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Voice greetings, facial display, motion sensors. Custom branding and audio options available.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-rocket"></i>
                <div>
                  <strong>Deployment:</strong> Ideal for school exhibitions and tech events.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 02: Serving Robots -->
        <div class="robot-card serving" data-aos="fade-up" data-aos-delay="100">
          <div class="status-badge service-ready">
            <i class="fas fa-check-circle"></i>
            Service Ready
          </div>
          <div class="robot-image">
            <img src="/assets/robots/serving.png" alt="Serving Robot" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 02:</span> SERVING ROBOTS
            </h2>
            <div class="robot-subtitle">🍽️ "Hospitality Automated."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Elevating hospitality! Used in hotels, hospitals, and events for hands-free delivery.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Follows programmed path or remote control. Lightweight with tray holder, voice commands, auto-return.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 03: Room Cleaning Robots -->
        <div class="robot-card cleaning" data-aos="fade-up" data-aos-delay="200">
          <div class="status-badge service-ready">
            <i class="fas fa-check-circle"></i>
            Service Ready
          </div>
          <div class="robot-image">
            <img src="/assets/robots/rcn.png" alt="Cleaning Robot" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 03:</span> ROOM CLEANING ROBOTS
            </h2>
            <div class="robot-subtitle">🧹 "Autonomous Sanitation."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Effortlessly maintain clean environments. Ideal for classrooms, labs, and homes.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Obstacle detection, edge sensing, dust vacuuming, mopping. Rechargeable with auto-docking.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 04: Quadruped Robots -->
        <div class="robot-card quadruped" data-aos="fade-up">
          <div class="status-badge advanced">
            <i class="fas fa-star"></i>
            Advanced Mobility
          </div>
          <div class="robot-image">
            <img src="/assets/robots/SD.jpg" alt="Quadruped Robot" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 04:</span> QUADRUPED ROBOTS
            </h2>
            <div class="robot-subtitle">🕷️ "Terrain Specialists."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-layer-group"></i>
                <div>
                  <strong>Models:</strong> Spider Robots (Hexapods) & Robot Dogs.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> High-stability navigation for uneven terrain and advanced programming research.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Multi-legged locomotion logic and balance control.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 05: Robotic Cars -->
        <div class="robot-card smart-car" data-aos="fade-up" data-aos-delay="100">
          <div class="status-badge educational">
            <i class="fas fa-graduation-cap"></i>
            Educational Kit
          </div>
          <div class="robot-image">
            <img src="/assets/robots/rc.jpg" alt="Smart Car Kit" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 05:</span> ROBOTIC CARS
            </h2>
            <div class="robot-subtitle">🚗 "The ATL Standard."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Perfect for beginners and students in ATL labs.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Arduino-based programmable. Line following, Bluetooth control, obstacle avoidance.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-box"></i>
                <div>
                  <strong>In the Box:</strong> Sensors included, wiring guide, and tutorials.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 06: Bluetooth RC Car -->
        <div class="robot-card rc-car" data-aos="fade-up" data-aos-delay="200">
          <div class="status-badge educational">
            <i class="fas fa-graduation-cap"></i>
            Educational Kit
          </div>
          <div class="robot-image">
            <img src="/assets/robots/brckit.png" alt="Bluetooth RC Car" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 06:</span> BLUETOOTH RC CAR
            </h2>
            <div class="robot-subtitle">🎮 "Remote Operations."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Control your robot using a smartphone!
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Mobile app control via Bluetooth.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-wrench"></i>
                <div>
                  <strong>Build:</strong> Easy to assemble with DIY instructions. Perfect for school competitions and tech fairs.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 07: Obstacle Avoiding Robot -->
        <div class="robot-card obstacle" data-aos="fade-up">
          <div class="status-badge educational">
            <i class="fas fa-graduation-cap"></i>
            Educational Kit
          </div>
          <div class="robot-image">
            <img src="/assets/robots/oark.png" alt="Obstacle Avoiding Robot" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 07:</span> OBSTACLE AVOIDING ROBOT
            </h2>
            <div class="robot-subtitle">🚧 "Autonomous Navigation."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Learn automation with sensors!
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> Ultrasonic-based obstacle detection. Fully programmable with Arduino. Ideal for ATL projects and beginner coders.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 08: Robotic Arm -->
        <div class="robot-card robotic-arm" data-aos="fade-up" data-aos-delay="100">
          <div class="status-badge educational">
            <i class="fas fa-graduation-cap"></i>
            Educational Kit
          </div>
          <div class="robot-image">
            <img src="/assets/robots/rak.jpg" alt="Robotic Arm" />
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 08:</span> ROBOTIC ARM KIT
            </h2>
            <div class="robot-subtitle">🦾 "Industrial Simulation."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Construct your own mechanical hand! Ideal for advanced-level ATL students.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-cogs"></i>
                <div>
                  <strong>Capabilities:</strong> 4-DOF Robotic Arm controlled using joystick or code.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-book"></i>
                <div>
                  <strong>Learning:</strong> Servo motors, degrees of freedom, and positioning.
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unit 09: Custom Build -->
        <div class="robot-card custom-build" data-aos="fade-up" data-aos-delay="200">
          <div class="status-badge custom">
            <i class="fas fa-flask"></i>
            R&D / Custom
          </div>
          <div class="robot-image custom-icon">
            <div class="custom-icon-wrapper">
              <i class="fas fa-lightbulb"></i>
              <div class="pulse-ring"></div>
            </div>
          </div>
          <div class="robot-content">
            <h2 class="robot-title">
              <span class="unit-number">UNIT 09:</span> CUSTOM CLIENT PROTOCOLS
            </h2>
            <div class="robot-subtitle">💡 "You Imagine. We Build."</div>
            
            <div class="robot-info">
              <div class="info-item">
                <i class="fas fa-bullseye"></i>
                <div>
                  <strong>Mission:</strong> Specialized robotics as per client ideas.
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-tools"></i>
                <div>
                  <strong>Process:</strong> Have a specific requirement? We design and manufacture custom robots based on unique industry needs or innovation challenges.
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/919347206123" target="_blank" class="custom-build-btn">
              <i class="fab fa-whatsapp"></i>
              Request Custom Build
            </a>
          </div>
        </div>
      </div>

      <!-- Order Now Section -->
      <section class="order-section">
        <div class="order-card">
          <div class="order-icon">
            <i class="fas fa-phone-alt"></i>
          </div>
          <h3>Ready to Order?</h3>
          <p>Contact us for pricing, availability, and custom configurations</p>
          <div class="contact-buttons">
            <a href="tel:+919347206123" class="contact-btn primary">
              <i class="fas fa-phone"></i>
              Call: +91 9347206123
            </a>
            <a href="https://wa.me/919347206123" target="_blank" class="contact-btn secondary">
              <i class="fab fa-whatsapp"></i>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
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
.robots-page {
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
    radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 3s ease-in-out infinite;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
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
}

.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
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
   ROBOTS CONTAINER
   ================================ */
.robots-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.robot-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 0;
  border: 2px solid rgba(102, 126, 234, 0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.robot-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: rotate(45deg);
  transition: all 0.6s ease;
}

.robot-card:hover::before {
  left: 100%;
}

.robot-card:hover {
  transform: translateY(-5px);
  border-color: rgba(102, 126, 234, 0.4);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
}

/* ================================
   STATUS BADGE
   ================================ */
.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.service-ready {
  background: rgba(50, 205, 50, 0.2);
  border: 1px solid rgba(50, 205, 50, 0.5);
  color: #32cd32;
}

.status-badge.advanced {
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.5);
  color: #ffd700;
}

.status-badge.educational {
  background: rgba(0, 191, 255, 0.2);
  border: 1px solid rgba(0, 191, 255, 0.5);
  color: #00bfff;
}

.status-badge.custom {
  background: rgba(138, 43, 226, 0.2);
  border: 1px solid rgba(138, 43, 226, 0.5);
  color: #8a2be2;
}

/* ================================
   ROBOT IMAGE (1:1 Ratio - Square)
   ================================ */
.robot-image {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
}

.robot-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
}

.robot-card:hover .robot-image img {
  transform: scale(1.05);
}

/* Custom Icon for Unit 09 */
.robot-image.custom-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(102, 126, 234, 0.1));
}

.custom-icon-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-icon-wrapper i {
  font-size: 4rem;
  color: #ffd700;
  z-index: 2;
  position: relative;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #ffd700;
  border-radius: 50%;
  animation: ripple 2s ease-out infinite;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* ================================
   ROBOT CONTENT
   ================================ */
.robot-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.robot-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.3;
}

.unit-number {
  color: #00ffff;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.25rem;
}

.robot-subtitle {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* ================================
   ROBOT INFO
   ================================ */
.robot-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateX(3px);
}

.info-item i {
  color: #00ffff;
  font-size: 1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.info-item div {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.info-item strong {
  color: #ffffff;
  font-weight: 700;
}

/* ================================
   CUSTOM BUILD BUTTON
   ================================ */
.custom-build-btn {
  margin-top: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #ffd700, #ffb300);
  color: #0a0e27;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(255, 215, 0, 0.3);
}

.custom-build-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 215, 0, 0.5);
}

.custom-build-btn i {
  font-size: 1.25rem;
}

/* ================================
   ORDER SECTION
   ================================ */
.order-section {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.order-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  transition: all 0.4s ease;
}

.order-card:hover {
  border-color: rgba(0, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.3);
}

.order-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #00ffff, #00ced1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 3s ease-in-out infinite;
}

.order-icon i {
  font-size: 2rem;
  color: #0a0e27;
}

.order-card h3 {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
}

.order-card p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.contact-btn.primary {
  background: linear-gradient(135deg, #00ffff, #00ced1);
  color: #0a0e27;
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
}

.contact-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 255, 255, 0.5);
}

.contact-btn.secondary {
  background: rgba(37, 211, 102, 0.2);
  color: #25d366;
  border: 2px solid rgba(37, 211, 102, 0.5);
}

.contact-btn.secondary:hover {
  background: rgba(37, 211, 102, 0.3);
  border-color: #25d366;
  transform: translateY(-2px);
}

.contact-btn i {
  font-size: 1.25rem;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1200px) {
  .robots-container {
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

  .main-section {
    padding: 1rem;
  }

  .robots-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .order-card {
    padding: 2rem 1.5rem;
  }

  .contact-buttons {
    flex-direction: column;
  }

  .contact-btn {
    width: 100%;
    justify-content: center;
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
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .robot-card {
    border-radius: 15px;
  }

  .robot-content {
    padding: 1.25rem;
  }

  .robot-title {
    font-size: 1rem;
  }

  .order-card h3 {
    font-size: 1.5rem;
  }
}
</style>
