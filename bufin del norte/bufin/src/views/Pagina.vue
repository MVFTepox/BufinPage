<template>
  <div class="app-container">
    <Navbar />
    <Banner />
    <Carrusel />
    <Servicios />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import Carrusel from '../components/Carrusel.vue'
import Servicios from '../components/Servicios.vue'
import Footer from '../components/Footer.vue'
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(33, 34, 36, 1);
}
</style>
