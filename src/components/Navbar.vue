<template>
  <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: linear-gradient(135deg, #00bfff 0%, #00a8e0 100%); box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <nav style="max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 70px; display: flex; align-items: center; justify-content: space-between;">
      
      <!-- Logo + Brand -->
      <router-link to="/" style="display: flex; align-items: center; gap: 0.75rem; text-decoration: none;">
        <img src="/assets/Logo.png" alt="FAA" style="width: 45px; height: 45px; object-fit: contain; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));" />
        <span style="font-size: 1.5rem; font-weight: 800; color: #ffb300; text-shadow: 2px 2px 4px rgba(0,0,0,0.2); letter-spacing: 0.5px; font-family: 'Poppins', sans-serif;">FAA ROBOTICS</span>
      </router-link>

      <!-- Navigation Links -->
      <div class="desktop-menu" style="display: flex; align-items: center; gap: 2.5rem;">
        <router-link 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ 'active': $route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
        
        <!-- Student Zone Dropdown -->
        <div class="dropdown-container" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
          <div 
            class="nav-link dropdown-trigger"
            :class="{ 'active': $route.path.includes('/student-zone') }"
          >
            Student Zone
            <i class="fas fa-chevron-down dropdown-icon" :class="{ 'rotated': showDropdown }"></i>
          </div>
          
          <transition name="dropdown-fade">
            <div v-if="showDropdown" class="dropdown-menu">
              <router-link 
                v-for="item in studentZoneLinks" 
                :key="item.path"
                :to="item.path"
                class="dropdown-item"
                @click="showDropdown = false"
              >
                <i :class="item.icon"></i>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">{{ item.name }}</span>
                  <span class="dropdown-item-desc">{{ item.description }}</span>
                </div>
              </router-link>
            </div>
          </transition>
        </div>
        
        <!-- Robo Store Dropdown -->
        <div class="dropdown-container" @mouseenter="showStoreDropdown = true" @mouseleave="showStoreDropdown = false">
          <div 
            class="nav-link dropdown-trigger"
            :class="{ 'active': $route.path.includes('/store') }"
          >
            Robo Store
            <i class="fas fa-chevron-down dropdown-icon" :class="{ 'rotated': showStoreDropdown }"></i>
          </div>
          
          <transition name="dropdown-fade">
            <div v-if="showStoreDropdown" class="dropdown-menu">
              <router-link 
                v-for="item in roboStoreLinks" 
                :key="item.path"
                :to="item.path"
                class="dropdown-item"
                @click="showStoreDropdown = false"
              >
                <i :class="item.icon"></i>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">{{ item.name }}</span>
                  <span class="dropdown-item-desc">{{ item.description }}</span>
                </div>
              </router-link>
            </div>
          </transition>
        </div>
        
        <router-link 
          v-for="link in postStudentLinks" 
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ 'active': $route.path === link.path }"
        >
          {{ link.name }}
        </router-link>
      </div>

    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const showDropdown = ref(false)
const showStoreDropdown = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'For Institutions', path: '/institutions' }
]

const studentZoneLinks = [
  { 
    name: 'The Academy & Hall of Fame', 
    path: '/student-zone/academy',
    icon: 'fas fa-graduation-cap',
    description: 'FREE Learning Programs'
  },
  { 
    name: 'Chathurvidha Competition', 
    path: '/student-zone/chathurvidha',
    icon: 'fas fa-trophy',
    description: 'Innovation Challenge'
  }
]

const roboStoreLinks = [
  { 
    name: 'Electronics for Sale', 
    path: '/store/electronics',
    icon: 'fas fa-microchip',
    description: 'Sensors, Motors & More'
  },
  { 
    name: 'Books for Sale', 
    path: '/store/books',
    icon: 'fas fa-book',
    description: 'Robotics Learning Resources'
  },
  { 
    name: 'Robots for Sale', 
    path: '/store/robots',
    icon: 'fas fa-robot',
    description: 'Pre-built Robot Kits'
  }
]

const postStudentLinks = [
  { name: 'Contact Us', path: '/contact' }
]
</script>

<style scoped>
.nav-link {
  color: #000000;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #ffb300;
  transition: width 0.3s ease;
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active::after {
  width: 100%;
  background-color: #ffd700;
}

/* Dropdown Styles */
.dropdown-container {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.dropdown-icon {
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  min-width: 320px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  z-index: 1000;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 8px solid #667eea;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-decoration: none;
  color: #ffffff;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 0.5rem;
}

.dropdown-item:last-child {
  margin-bottom: 0;
}

.dropdown-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(5px);
}

.dropdown-item i {
  font-size: 1.8rem;
  min-width: 40px;
  text-align: center;
  color: #ffd700;
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dropdown-item-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.dropdown-item-desc {
  font-size: 0.75rem;
  opacity: 0.8;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
}

/* Dropdown Animation */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.3s ease;
}

.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

@media (max-width: 1024px) {
  .desktop-menu {
    display: none !important;
  }
}
</style>
