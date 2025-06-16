<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

// Importar imágenes
import consultingOffer from '../assets/consulting-offer.jpg';
import howWeWork from '../assets/how-we-work.jpg';
import targetClient from '../assets/target-client.jpg';
import whyChooseUs from '../assets/why-choose-us.jpg';
</script>

<template>
  <Navbar />
  <div class="timeline-container">
    <h2 class="title">Consultoría</h2>

    <div class="timeline">
      <!-- Bloque 1 -->
      <div class="timeline-item left">
        <div class="bubble">¿Qué ofrecemos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="consultingOffer" alt="Consultoría empresarial" class="content-image" />
          <p>Ofrecemos consultoría estratégica en comercio exterior, enfocada en brindar soluciones personalizadas y efectivas para cada cliente.</p>
          <i class="bi bi-briefcase-fill icon"></i>
        </div>
      </div>

      <!-- Bloque 2 -->
      <div class="timeline-item right">
        <div class="bubble">¿Cómo trabajamos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="howWeWork" alt="Cómo trabajamos" class="content-image" />
          <p>Realizamos un diagnóstico detallado, identificamos oportunidades de mejora y acompañamos al cliente en todo el proceso de implementación.</p>
          <i class="bi bi-gear-fill icon"></i>
        </div>
      </div>

      <!-- Bloque 3 -->
      <div class="timeline-item left">
        <div class="bubble">¿A quién va dirigido?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="targetClient" alt="A quién va dirigido" class="content-image" />
          <p>Nuestra consultoría está orientada a empresas que buscan optimizar sus operaciones y cumplir con la normativa aduanera vigente.</p>
          <i class="bi bi-people-fill icon"></i>
        </div>
      </div>

      <!-- Bloque 4 -->
      <div class="timeline-item right">
        <div class="bubble">¿Por qué elegirnos?</div>
        <div class="line"></div>
        <div class="content-block">
          <img :src="whyChooseUs" alt="Por qué elegirnos" class="content-image" />
          <p>Contamos con más de 20 años de experiencia, un equipo experto y soluciones efectivas que garantizan resultados.</p>
          <i class="bi bi-award-fill icon"></i>
        </div>
      </div>
    </div>

    <div class="timeline-line-extension"></div>

    <div class="call-to-action fade-in">
      <p>¿Quieres una consultoría personalizada para tu empresa?</p>
      <a href="/contactos">Contáctanos</a>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.timeline-container {
  background-color: #0e0e0e;
  color: white;
  padding: 2rem 1rem 8rem;
  font-family: 'Arial', sans-serif;
}

.title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
  color: #fdfdfd;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
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

.timeline-item:nth-child(1) .bubble {
  background: #ffe8b0;
  color: #2c1b00;
}

.timeline-item:nth-child(2) .bubble {
  background: #d0f0ff;
  color: #002c33;
}

.timeline-item:nth-child(3) .bubble {
  background: #d2ffc9;
  color: #002b11;
}

.timeline-item:nth-child(4) .bubble {
  background: #ffd0ec;
  color: #3d002b;
}

.bubble {
  border-radius: 999px;
  padding: 0.75rem 1.75rem;
  font-weight: 700;
  font-size: 1.1rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  position: relative;
  z-index: 2;
}

.line {
  flex-shrink: 0;
  width: 40px;
  height: 1px;
  background-color: #888;
  z-index: 1;
}

.content-block {
  background: linear-gradient(145deg, #1a1a1a, #252525);
  color: #f1f1f1;
  padding: 1.75rem;
  border-radius: 1.5rem;
  max-width: 500px;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  animation: fadeInUp 1s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content-block .icon {
  font-size: 2.5rem;
  text-align: center;
}

.content-image {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: #444;
  transform: translateX(-40%);
  z-index: 0;
}

.timeline-line-extension {
  width: 2px;
  height: 0.5px;
  background-color: #444;
  margin: -2rem auto 2rem auto;
}

.call-to-action {
  text-align: center;
}
.call-to-action p {
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 1rem;
}
.call-to-action a {
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  color: #000;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 3px 6px rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  display: inline-block;
}
.call-to-action a:hover {
  background: #ccc;
  transform: translateY(-3px);
}

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
    background-color: #888;
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

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
