<script setup> 
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <Navbar />

  <section class="hero-section">
    <div class="hero-content">
      <h1>Axo Web</h1>
      <p>Diseño estratégico, moderno y funcional para destacar tu presencia digital.</p>
      <button class="visit-button" disabled>Próximamente</button>
    </div>
  </section>

  <section class="features">
    <div class="feature">
      <h2>Diseño Responsivo</h2>
      <p>Adaptado perfectamente a dispositivos móviles, tabletas y escritorios.</p>
    </div>
    <div class="feature">
      <h2>Experiencia de Usuario</h2>
      <p>Navegación fluida, jerarquía visual clara y estética profesional.</p>
    </div>
    <div class="feature">
      <h2>Código Limpio</h2>
      <p>Desarrollado con buenas prácticas, alto rendimiento y escalabilidad.</p>
    </div>
    <div class="feature">
      <h2>Marketing Digital</h2>
      <p>Optimización estratégica para posicionar tu marca y atraer más clientes.</p>
    </div>
  </section>

  <section class="cta-section">
    <h2>¿Quieres una web igual de impactante?</h2>
    <p>Contáctanos y lleva tu marca al siguiente nivel con un diseño que sí convierte.</p>
    <router-link to="/contactos" class="cta-button">Contáctanos</router-link>
  </section>

  <Footer />
</template>

<style scoped>
.hero-section {
  background: linear-gradient(to right, #0a1f3c, #1a2e4d);
  color: white;
  text-align: center;
  padding: 6rem 2rem 4rem;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.visit-button {
  background-color: #f5b841;
  color: #0a1f3c;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  border: none;
  cursor: default;
  opacity: 0.8;
}

.features {
  background-color: #f8f9fc;
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  text-align: center;
}

.feature {
  max-width: 300px;
}

.feature h2 {
  color: #1a2e4d;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature p {
  color: #333;
  font-size: 1rem;
}

.cta-section {
  background-color: #0a1f3c;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-button {
  background-color: white;
  color: #0a1f3c;
  padding: 0.75rem 2rem;
  font-weight: bold;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ddd;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
}
</style>
