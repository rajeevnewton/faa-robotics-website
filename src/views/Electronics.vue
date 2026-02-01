<template>
  <div class="electronics-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="hero-icon">
          <i class="fas fa-microchip"></i>
        </div>
        <h1 class="hero-title">
          Electronics <span class="gradient-text">for Sale</span>
        </h1>
        <p class="hero-subtitle">
          Premium components for robotics & electronics projects
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-section">
      <!-- Modules Grid -->
      <div class="modules-container">
          <!-- Module A: Power Core -->
          <div class="module-card power-core" data-aos="fade-up">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE A: THE POWER CORE</h2>
                <p class="module-desc">Energy solutions to keep systems online.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/A.png" alt="Power Core" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> 9V Battery & Hi-Quality Clips</li>
              <li><i class="fas fa-check-circle"></i> 12V Rechargeable Battery Packs</li>
              <li><i class="fas fa-check-circle"></i> Lithium Battery Charger Units</li>
              <li><i class="fas fa-check-circle"></i> Power Supply Boards (Breadboard friendly)</li>
              <li><i class="fas fa-check-circle"></i> DC Power Adapters (5V, 9V, 12V)</li>
            </ul>
          </div>

          <!-- Module B: Foundation Elements -->
          <div class="module-card foundation" data-aos="fade-up" data-aos-delay="100">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-project-diagram"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE B: FOUNDATION ELEMENTS</h2>
                <p class="module-desc">The atomic building blocks of every circuit.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/B.png" alt="Foundation Elements" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Resistors, Capacitors, Diodes (Assorted Packs)</li>
              <li><i class="fas fa-check-circle"></i> Prototyping: Breadboards (400/830 Tie) & Jumper Wires</li>
              <li><i class="fas fa-check-circle"></i> Control: Potentiometers & Tactile Push Buttons</li>
              <li><i class="fas fa-check-circle"></i> Light: LEDs (Red, Green, Blue, RGB)</li>
              <li><i class="fas fa-check-circle"></i> Logic: Transistors (BC547, 2N2222)</li>
            </ul>
          </div>

          <!-- Module C: Command Center -->
          <div class="module-card command-center" data-aos="fade-up" data-aos-delay="200">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-microchip"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE C: COMMAND CENTER</h2>
                <p class="module-desc">The brains behind the operation.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/C.png" alt="Command Center" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Arduino Series: UNO R3, Nano V3, Mega 2560</li>
              <li><i class="fas fa-check-circle"></i> IoT: NodeMCU (ESP8266), Raspberry Pi (On Request)</li>
              <li><i class="fas fa-check-circle"></i> Drivers: L298N High Power, L293D Shield</li>
              <li><i class="fas fa-check-circle"></i> Switching: Relay Modules (1, 2, 4 Channel 5V)</li>
            </ul>
          </div>

          <!-- Module D: Sensor Array -->
          <div class="module-card sensor-array" data-aos="fade-up">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-broadcast-tower"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE D: SENSOR ARRAY</h2>
                <p class="module-desc">Give your robot the ability to see, hear, and feel.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/D.png" alt="Sensor Array" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Vision: Ultrasonic (HC-SR04), IR Proximity Sensors</li>
              <li><i class="fas fa-check-circle"></i> Environment: Gas (MQ Series), Raindrop, Soil Moisture</li>
              <li><i class="fas fa-check-circle"></i> Temperature: DHT11/22 (Temp/Humidity)</li>
              <li><i class="fas fa-check-circle"></i> Security: PIR Motion, Sound Sensor, LDR Light Sensor</li>
              <li><i class="fas fa-check-circle"></i> Input: Touch Sensor Modules</li>
            </ul>
          </div>

          <!-- Module E: Kinetic Drive -->
          <div class="module-card kinetic-drive" data-aos="fade-up" data-aos-delay="100">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-cog"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE E: KINETIC DRIVE</h2>
                <p class="module-desc">Torque, speed, and structural integrity.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/E.png" alt="Kinetic Drive" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Motors: BO Motors, DC Motors (3V-12V), High-Torque Geared</li>
              <li><i class="fas fa-check-circle"></i> Servos: SG90 (Micro), MG996 (Metal Gear)</li>
              <li><i class="fas fa-check-circle"></i> Hardware: Wheels (Track/Rubber), Castor Wheels</li>
              <li><i class="fas fa-check-circle"></i> Chassis: Acrylic Chassis Boards</li>
              <li><i class="fas fa-check-circle"></i> Fasteners: Spacers, Nut & Bolt Kits</li>
            </ul>
          </div>

          <!-- Module F: Visual Interface -->
          <div class="module-card visual-interface" data-aos="fade-up" data-aos-delay="200">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-desktop"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE F: VISUAL INTERFACE</h2>
                <p class="module-desc">Data readout and visual feedback systems.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/F.png" alt="Visual Interface" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> 16x2 LCD Display (Standard / I2C Backpack)</li>
              <li><i class="fas fa-check-circle"></i> OLED Display (0.96" I2C)</li>
              <li><i class="fas fa-check-circle"></i> 7-Segment Displays (1-digit, 4-digit)</li>
              <li><i class="fas fa-check-circle"></i> 8x8 LED Matrix Modules</li>
              <li><i class="fas fa-check-circle"></i> 4x4 Membrane Keypads</li>
            </ul>
          </div>

          <!-- Module G: Comms-Link -->
          <div class="module-card comms-link" data-aos="fade-up">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-wifi"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE G: COMMS-LINK</h2>
                <p class="module-desc">Wireless control and telemetry.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/G.png" alt="Comms-Link" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Bluetooth: HC-05 (Master/Slave), HC-06</li>
              <li><i class="fas fa-check-circle"></i> Wi-Fi: ESP8266 Modules</li>
              <li><i class="fas fa-check-circle"></i> Cellular: GSM SIM800L</li>
              <li><i class="fas fa-check-circle"></i> Radio: RF 433MHz Tx/Rx Pair</li>
              <li><i class="fas fa-check-circle"></i> Input: Joystick Modules (Dual Axis)</li>
            </ul>
          </div>

          <!-- Module H: Field Tools -->
          <div class="module-card field-tools" data-aos="fade-up" data-aos-delay="100">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-tools"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE H: FIELD TOOLS & EXTRAS</h2>
                <p class="module-desc">Essential gear for assembly and repair.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/H.png" alt="Field Tools" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> Cables: USB (Type A-B, Mini, Micro)</li>
              <li><i class="fas fa-check-circle"></i> Storage: SD Card Modules</li>
              <li><i class="fas fa-check-circle"></i> Insulation: Heat Shrink Tube Packs</li>
              <li><i class="fas fa-check-circle"></i> Tools: Screwdrivers, Soldering Irons, Multimeters</li>
            </ul>
          </div>

          <!-- Module I: Combo Kits -->
          <div class="module-card combo-kits" data-aos="fade-up" data-aos-delay="200">
            <div class="module-header">
              <div class="module-icon">
                <i class="fas fa-box-open"></i>
              </div>
              <div class="module-title-section">
                <h2 class="module-title">MODULE I: COMBO KITS</h2>
                <p class="module-desc">Complete project bundles ready to go.</p>
              </div>
            </div>
            <div class="module-image">
              <img src="/assets/Electronics/I.png" alt="Combo Kits" />
            </div>
            <ul class="module-items">
              <li><i class="fas fa-check-circle"></i> ATL Starter Kit: Complete lab-in-a-box for schools</li>
              <li><i class="fas fa-check-circle"></i> Arduino Beginner Kit: Uno + Cable + Basics</li>
              <li><i class="fas fa-check-circle"></i> Sensor Pack Combo: Top 10 essential sensors</li>
              <li><i class="fas fa-check-circle"></i> Obstacle Avoidance Bot: Complete bot kit</li>
              <li><i class="fas fa-check-circle"></i> AI & ML Project Kit: ESP32/Camera with docs</li>
            </ul>
          </div>
        </div>

        <!-- Bottom Sidebar Section -->
        <section class="bottom-sidebar">
          <div class="widget-card">
            <div class="widget-header">
              <i class="fas fa-shopping-cart"></i>
              <h3>Pricing & Purchase</h3>
            </div>
            <div class="widget-content">
              <div class="pricing-info">
                <div class="pricing-item">
                  <i class="fas fa-tag"></i>
                  <span>Individual components start at just ₹10/-</span>
                </div>
                <div class="pricing-item">
                  <i class="fas fa-gifts"></i>
                  <span>Combo kits available from ₹499/- onwards</span>
                </div>
                <div class="pricing-item">
                  <i class="fas fa-credit-card"></i>
                  <span>Google Pay Available</span>
                </div>
                <div class="pricing-item">
                  <i class="fas fa-truck"></i>
                  <span>Delivery across Andhra Pradesh & India</span>
                </div>
              </div>
            </div>
          </div>

          <div class="widget-card order-card">
            <div class="widget-header">
              <i class="fas fa-phone-alt"></i>
              <h3>Order Now</h3>
            </div>
            <div class="widget-content">
              <div class="contact-methods">
                <a href="tel:+919490871276" class="contact-link">
                  <i class="fas fa-phone"></i>
                  <span>Call/WhatsApp: +91 94908 71276</span>
                </a>
                <a href="mailto:finalavengersacademy@gmail.com" class="contact-link">
                  <i class="fas fa-envelope"></i>
                  <span>finalavengersacademy@gmail.com</span>
                </a>
                <div class="custom-kits">
                  <i class="fas fa-wrench"></i>
                  <span>Custom kits for schools, ATL labs, and competitions available</span>
                </div>
              </div>
            </div>
          </div>

          <div class="widget-card why-buy-card">
            <div class="widget-header">
              <i class="fas fa-star"></i>
              <h3>Why Buy from FAA?</h3>
            </div>
            <div class="widget-content">
              <div class="why-buy-items">
                <div class="why-buy-item">
                  <i class="fas fa-check-double"></i>
                  <div>
                    <strong>Tested Components</strong>
                    <p>We use what we sell.</p>
                  </div>
                </div>
                <div class="why-buy-item">
                  <i class="fas fa-user-graduate"></i>
                  <div>
                    <strong>Tech Guidance</strong>
                    <p>Stuck? Call our mentors.</p>
                  </div>
                </div>
                <div class="why-buy-item">
                  <i class="fas fa-dollar-sign"></i>
                  <div>
                    <strong>Affordable</strong>
                    <p>Student-friendly pricing.</p>
                  </div>
                </div>
                <div class="why-buy-item">
                  <i class="fas fa-shipping-fast"></i>
                  <div>
                    <strong>Fast Shipping</strong>
                    <p>Dispatched from Vijayawada HQ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import { onMounted } from 'vue'

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
.electronics-page {
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
  background: linear-gradient(135deg, #00ffff, #ffd700);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatAnimation 3s ease-in-out infinite;
  box-shadow: 0 10px 40px rgba(0, 255, 255, 0.4);
}

.hero-icon i {
  font-size: 2.5rem;
  color: #0a0e27;
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
  background: linear-gradient(135deg, #00ffff, #ffd700);
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
   MODULES CONTAINER
   ================================ */
.modules-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.module-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.module-card::before {
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

.module-card:hover::before {
  left: 100%;
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

/* Module-specific colors */
.power-core {
  border-color: rgba(255, 140, 0, 0.3);
}

.power-core:hover {
  border-color: rgba(255, 140, 0, 0.6);
  box-shadow: 0 20px 60px rgba(255, 140, 0, 0.3);
}

.foundation {
  border-color: rgba(0, 191, 255, 0.3);
}

.foundation:hover {
  border-color: rgba(0, 191, 255, 0.6);
  box-shadow: 0 20px 60px rgba(0, 191, 255, 0.3);
}

.command-center {
  border-color: rgba(50, 205, 50, 0.3);
}

.command-center:hover {
  border-color: rgba(50, 205, 50, 0.6);
  box-shadow: 0 20px 60px rgba(50, 205, 50, 0.3);
}

.sensor-array {
  border-color: rgba(138, 43, 226, 0.3);
}

.sensor-array:hover {
  border-color: rgba(138, 43, 226, 0.6);
  box-shadow: 0 20px 60px rgba(138, 43, 226, 0.3);
}

.kinetic-drive {
  border-color: rgba(220, 20, 60, 0.3);
}

.kinetic-drive:hover {
  border-color: rgba(220, 20, 60, 0.6);
  box-shadow: 0 20px 60px rgba(220, 20, 60, 0.3);
}

.visual-interface {
  border-color: rgba(0, 255, 255, 0.3);
}

.visual-interface:hover {
  border-color: rgba(0, 255, 255, 0.6);
  box-shadow: 0 20px 60px rgba(0, 255, 255, 0.3);
}

.comms-link {
  border-color: rgba(32, 178, 170, 0.3);
}

.comms-link:hover {
  border-color: rgba(32, 178, 170, 0.6);
  box-shadow: 0 20px 60px rgba(32, 178, 170, 0.3);
}

.field-tools {
  border-color: rgba(169, 169, 169, 0.3);
}

.field-tools:hover {
  border-color: rgba(169, 169, 169, 0.6);
  box-shadow: 0 20px 60px rgba(169, 169, 169, 0.3);
}

.combo-kits {
  border-color: rgba(255, 215, 0, 0.3);
}

.combo-kits:hover {
  border-color: rgba(255, 215, 0, 0.6);
  box-shadow: 0 20px 60px rgba(255, 215, 0, 0.3);
}

/* ================================
   MODULE HEADER
   ================================ */
.module-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.module-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.power-core .module-icon {
  background: linear-gradient(135deg, #ff8c00, #ff6347);
  color: #ffffff;
}

.foundation .module-icon {
  background: linear-gradient(135deg, #00bfff, #1e90ff);
  color: #ffffff;
}

.command-center .module-icon {
  background: linear-gradient(135deg, #32cd32, #228b22);
  color: #ffffff;
}

.sensor-array .module-icon {
  background: linear-gradient(135deg, #8a2be2, #9370db);
  color: #ffffff;
}

.kinetic-drive .module-icon {
  background: linear-gradient(135deg, #dc143c, #b22222);
  color: #ffffff;
}

.visual-interface .module-icon {
  background: linear-gradient(135deg, #00ffff, #00ced1);
  color: #0a0e27;
}

.comms-link .module-icon {
  background: linear-gradient(135deg, #20b2aa, #008b8b);
  color: #ffffff;
}

.field-tools .module-icon {
  background: linear-gradient(135deg, #a9a9a9, #696969);
  color: #ffffff;
}

.combo-kits .module-icon {
  background: linear-gradient(135deg, #ffd700, #ffb300);
  color: #0a0e27;
}

.module-title-section {
  flex: 1;
}

.module-title {
  font-size: 1rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.3rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.3px;
  line-height: 1.2;
}

.module-desc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  line-height: 1.3;
}

/* ================================
   MODULE IMAGE
   ================================ */
.module-image {
  width: 100%;
  height: 220px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
  z-index: 1;
}

.module-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.module-card:hover .module-image img {
  transform: scale(1.05);
}

/* ================================
   MODULE ITEMS LIST
   ================================ */
.module-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.module-items li {
  padding: 0.6rem 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  line-height: 1.3;
}

.module-items li:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 1);
  transform: translateX(3px);
}

.module-items li i {
  color: #00ffff;
  font-size: 0.7rem;
  flex-shrink: 0;
}

/* ================================
   BOTTOM SIDEBAR
   ================================ */
.bottom-sidebar {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 2rem 2rem 2rem;
}

.widget-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 2px solid rgba(102, 126, 234, 0.2);
  transition: all 0.4s ease;
}

.widget-card:hover {
  border-color: rgba(102, 126, 234, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
}

.order-card {
  border-color: rgba(0, 255, 255, 0.2);
}

.order-card:hover {
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 15px 40px rgba(0, 255, 255, 0.2);
}

.why-buy-card {
  border-color: rgba(255, 215, 0, 0.2);
}

.why-buy-card:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
}

.widget-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.widget-header i {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #00ffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.widget-header h3 {
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

.widget-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* ================================
   PRICING INFO
   ================================ */
.pricing-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pricing-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.pricing-item:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(5px);
}

.pricing-item i {
  color: #00ffff;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.pricing-item span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ================================
   CONTACT METHODS
   ================================ */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 255, 255, 0.1);
}

.contact-link:hover {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
  color: #00ffff;
  transform: translateX(5px);
}

.contact-link i {
  color: #00ffff;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.custom-kits {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.custom-kits i {
  color: #ffd700;
  font-size: 1.1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.custom-kits span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ================================
   WHY BUY ITEMS
   ================================ */
.why-buy-items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.why-buy-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.why-buy-item:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(5px);
}

.why-buy-item i {
  color: #ffd700;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.why-buy-item strong {
  display: block;
  color: #ffffff;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-family: 'Poppins', sans-serif;
}

.why-buy-item p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  margin: 0;
}

/* ================================
   RESPONSIVE DESIGN
   ================================ */
@media (max-width: 1200px) {
  .modules-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .bottom-sidebar {
    grid-template-columns: 1fr;
    padding: 0 1.5rem 2rem 1.5rem;
  }
}

@media (max-width: 900px) {
  .modules-container {
    grid-template-columns: 1fr;
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

  .modules-container {
    gap: 1rem;
  }

  .module-header {
    align-items: flex-start;
  }

  .module-title {
    font-size: 0.95rem;
  }

  .module-image {
    height: 200px;
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

  .module-card {
    padding: 1.25rem;
  }

  .widget-card {
    padding: 1.25rem;
  }

  .module-items li {
    font-size: 0.75rem;
  }

  .module-image {
    height: 180px;
  }
}
</style>
