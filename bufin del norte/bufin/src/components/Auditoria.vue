<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
</script>

<template>
  <Navbar />
  <div class="auditoria-container">
    <h2 class="title">Auditoría en Comercio Exterior</h2>

    <div class="cards-container">
      <!-- Tarjeta 1 -->
      <div class="card">
        <i class="bi bi-search icon"></i>
        <h3 class="card-title">Detección de riesgos</h3>
        <p class="card-text">Identificamos áreas vulnerables en tus procesos de importación y exportación, asegurando cumplimiento con la legislación aduanera vigente.</p>
      </div>

      <!-- Tarjeta 2 -->
      <div class="card">
        <i class="bi bi-file-earmark-check icon"></i>
        <h3 class="card-title">Revisión documental</h3>
        <p class="card-text">Auditamos pedimentos, facturas, y documentos aduanales para garantizar que todo esté en regla y evitar sanciones.</p>
      </div>

      <!-- Tarjeta 3 -->
      <div class="card">
        <i class="bi bi-shield-lock icon"></i>
        <h3 class="card-title">Cumplimiento normativo</h3>
        <p class="card-text">Aseguramos que tu empresa cumpla con las disposiciones legales, reduciendo el riesgo de multas o auditorías oficiales.</p>
      </div>

      <!-- Tarjeta 4 -->
      <div class="card">
        <i class="bi bi-bar-chart-line icon"></i>
        <h3 class="card-title">Informe de hallazgos</h3>
        <p class="card-text">Te entregamos un informe detallado con recomendaciones claras para optimizar tus procesos y mantenerte en regla.</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.auditoria-container {
  background-color: #0e0e0e;
  color: white;
  padding: 3rem 1rem 6rem;
  font-family: 'Arial', sans-serif;
}

.title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #ffffff;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* Tarjetas con degradados suaves por color */
.card {
  color: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
}

/* Colores individuales para cada tarjeta */
.card:nth-child(1) {
  background: linear-gradient(135deg, #4e9af1, #6acdfc);
}
.card:nth-child(2) {
  background: linear-gradient(135deg, #7c4dff, #b388ff);
}
.card:nth-child(3) {
  background: linear-gradient(135deg, #43cea2, #185a9d);
}
.card:nth-child(4) {
  background: linear-gradient(135deg, #f7971e, #ffd200);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.4);
}

/* Íconos en colores más vivos */
.card:nth-child(1) .icon {
  color: #d9ecff;
}
.card:nth-child(2) .icon {
  color: #e3d7ff;
}
.card:nth-child(3) .icon {
  color: #c8fff2;
}
.card:nth-child(4) .icon {
  color: #fff5cc;
}

.icon {
  font-size: 2.8rem;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 100%;
    max-width: 90%;
  }
}

</style>
