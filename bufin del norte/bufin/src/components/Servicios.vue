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
  <div class=" py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center mb-4">
        <div class="service-header animate__animated animate__fadeInDown">
          <h2 class="mb-0">
            <span class="services-title">{{ servicios[0].title }}</span>
            <span class="ms-2">{{ servicios[0].icon }}</span>
          </h2>
        </div>
      </div>
    </div>
    
    <div class="row justify-content-center mt-3">
      <div class="col-md-5 animate__animated animate__fadeInLeft">
        <div class="service-card p-4">
          <div v-for="(item, index) in servicios[0].items[0].leftColumn" :key="index" class="service-item animate__animated animate__fadeIn" :style="`animation-delay: ${index * 0.1}s`">
            <p class="mb-2">·{{ item }}</p>
          </div>
        </div>
      </div>
      
      <div class="col-md-5 animate__animated animate__fadeInRight">
        <div class="service-card p-4">
          <div v-for="(item, index) in servicios[0].items[0].rightColumn" :key="index" class="service-item animate__animated animate__fadeIn" :style="`animation-delay: ${index * 0.1}s`">
            <p class="mb-2">·{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-3">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="tagline animate__animated animate__fadeIn">"RAPIDEZ, COSTO Y SEGURIDAD JURÍDICA"</h3>
          <div class="divider mx-auto animate__animated animate__fadeIn animate__delay-1s"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.services-title {
  color: var(--accent-color);
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--border-color);
  border-radius: 25px;
  display: inline-block;
}

.service-card {
  background-color: transparent;
  border: 2px solid var(--border-color);
  border-radius: 15px;
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-item {
  margin-bottom: 10px;
  padding-left: 10px;
  border-left: 2px solid var(--border-color);
}



@media (max-width: 768px) {
  .service-card {
    margin-bottom: 15px;
  }
  
  .services-title {
    padding: 0.3rem 1rem;
  }
}
</style>