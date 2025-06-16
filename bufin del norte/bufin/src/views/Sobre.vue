<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

import bullseye from '../assets/bullseye.png';
import businessTeam from '../assets/business-team.jpg';
import decisionMaking from '../assets/decision-making.jpeg';
import mapWithPins from '../assets/map-with-pins.jpg';
import thinking from '../assets/thinking.jpg';
import vision from '../assets/vision.jpg';
</script>

<template>
  <Navbar />

  <div class="timeline-container">
    <h2 class="title">Sobre Nosotros</h2>

    <div class="timeline">
      <div class="timeline-item left">
        <div class="bubble">¿A qué nos dedicamos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="businessTeam" alt="Equipo de trabajo" class="timeline-img" />
          <p>Desarrollar servicios integrales conformados por empresas líderes en su actividad.</p>
          <i class="bi bi-building-fill icon"></i>
        </div>
      </div>

      <div class="timeline-item right">
        <div class="bubble">¿Qué logramos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="bullseye" alt="Logro diana" class="timeline-img" />
          <p>Logramos un concepto único en la cadena de logística, brindando soluciones integrales.</p>
          <p>Con más de 20 años de experiencia.</p>
          <i class="bi bi-bullseye icon"></i>
        </div>
      </div>

      <div class="timeline-item left">
        <div class="bubble">¿Qué generamos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="decisionMaking" alt="Toma de decisiones" class="timeline-img" />
          <p>Generamos ventajas competitivas para nuestros clientes, permitiendo una mejor toma de decisiones en comercio exterior.</p>
          <i class="bi bi-gear-fill icon"></i>
        </div>
      </div>

      <div class="timeline-item right">
        <div class="bubble">¿En dónde?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="mapWithPins" alt="Mapa con pines" class="timeline-img" />
          <p>Presencia nacional e internacional, operando estratégicamente en los principales puertos y aduanas del país.</p>
          <i class="bi bi-geo-alt-fill icon"></i>
        </div>
      </div>

      <div class="timeline-item left">
        <div class="bubble">Nuestra Misión</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="thinking" alt="Persona con idea" class="timeline-img" />
          <p>Brindar servicios de comercio exterior con excelencia, integridad y compromiso, generando valor mediante soluciones efectivas e innovadoras.</p>
          <i class="bi bi-lightbulb-fill icon"></i>
        </div>
      </div>

      <div class="timeline-item right">
        <div class="bubble">Nuestra Visión</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="vision" alt="Camino al ocaso" class="timeline-img" />
          <p>Ser la consultora líder en comercio exterior en México, reconocida por nuestra calidad, experiencia y cobertura estratégica.</p>
          <i class="bi bi-eye-fill icon"></i>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<style scoped>
.timeline-container {
  background-color: #0a1f3c;
  color: #ffffff;
  padding: 2rem 1rem 6rem;
  font-family: 'Arial', sans-serif;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
  color: #f5b841;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #44618d;
  transform: translateX(-50%);
  z-index: 0;
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  gap: 1.5rem;
}

.timeline-item.left {
  flex-direction: row;
}

.timeline-item.right {
  flex-direction: row-reverse;
}

.bubble {
  background-color: #f5b841;
  color: #0a1f3c;
  border-radius: 999px;
  padding: 0.75rem 1.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  border: 2px solid #fdf6e3;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.line {
  flex-shrink: 0;
  width: 40px;
  height: 3px;
  background-color: #f5b841;
  z-index: 1;
}

.content-block {
  background-color: #eaf0f6;
  color: #0a1f3c;
  padding: 1.75rem;
  border-radius: 1.5rem;
  max-width: 500px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  font-size: 1rem;
}

.content-block .icon {
  display: block;
  font-size: 2rem;
  margin-top: 1rem;
  color: #1f3b73;
  text-align: center;
}

/* Estilo mejorado para imágenes */
.timeline-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  border: 2px solid #d6e1f2;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-item {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .timeline-item.right {
    align-items: flex-end !important;
  }

  .line {
    width: 2px;
    height: 20px;
    background-color: #f5b841;
    margin: 0.5rem 0;
  }

  .bubble {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }

  .content-block {
    width: 100%;
  }
}
</style>
