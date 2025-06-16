<script setup>
import { ref } from 'vue'

const servicios = ref([
  {
    title: 'Servicios',
    icon: '💼',
    items: [
      {
        leftColumn: [
          'Bodega americana (FWD)',
          'Investigaciones de mercado',
          'Verificación de operadores internacionales',
          'Programas de fomento',
          'Agencia aduanal'
        ],
        rightColumn: [
          'Integración de expedientes',
          'Registros de inversión extranjera',
          'Seguros de mercancías y transporte',
          'Logística',
          'Control de inventarios'
        ]
      }
    ]
  }
]);
</script>

<template>
  <section class="services-section py-5">
    <div class="container">
      <!-- Título -->
      <div class="text-center mb-5 animate__animated animate__fadeInDown">
        <h2 class="section-title">
          <span class="badge-title">{{ servicios[0].title }}</span>
          <span class="ms-2 icon">{{ servicios[0].icon }}</span>
        </h2>
      </div>

      <!-- Listas de servicios -->
      <div class="row justify-content-center">
        <!-- Columna izquierda -->
        <div class="col-md-5 mb-4 animate__animated animate__fadeInLeft">
          <div class="service-card">
            <ul class="list-unstyled mb-0">
              <li
                v-for="(item, index) in servicios[0].items[0].leftColumn"
                :key="index"
                class="service-item"
                :style="`animation-delay: ${index * 0.1}s`"
              >
                · {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="col-md-5 mb-4 animate__animated animate__fadeInRight">
          <div class="service-card">
            <ul class="list-unstyled mb-0">
              <li
                v-for="(item, index) in servicios[0].items[0].rightColumn"
                :key="index"
                class="service-item"
                :style="`animation-delay: ${index * 0.1}s`"
              >
                · {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Lema -->
      <div class="text-center mt-5 animate__animated animate__fadeInUp animate__delay-1s">
        <h3 class="tagline">"RAPIDEZ, COSTO Y SEGURIDAD JURÍDICA"</h3>
        <div class="divider mx-auto"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Usando tu paleta anterior basada en variables */
:root {
  --accent-color: #005479;
  --border-color: #d1d1d1;
  --background-light: #f5f5f5;
  --text-color: #1e1e1e;
}

/* Sección principal */
.services-section {
  background-color: rgb(28, 28, 28);
  color: var(--text-color);
}

/* Título */
.section-title {
  font-size: 2.2rem;
  font-weight: 700;
}

.badge-title {
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  background-color: transparent;
  color: var(--accent-color);
  font-weight: 600;
  font-size: 1.5rem;
}

.icon {
  font-size: 1.8rem;
}

/* Tarjetas */
.service-card {
  background-color: transparent;
  border: 2px solid var(--border-color);
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
}

/* Ítems */
.service-item {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-left: 0.8rem;
  border-left: 3px solid var(--border-color);
  color: var(--text-color);
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Lema */
.tagline {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--accent-color);
  letter-spacing: 1px;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: var(--accent-color);
  margin-top: 0.5rem;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .badge-title {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
  }

  .service-item {
    font-size: 1rem;
  }

  .tagline {
    font-size: 1.1rem;
  }
}
</style>
