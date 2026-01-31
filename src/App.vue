<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app" style="min-height: 100vh; background-color: #ffffff;">
    <Navbar />
    <main style="padding-top: 70px;">
      <router-view />
    </main>
  </div>
</template>
