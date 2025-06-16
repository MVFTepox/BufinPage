<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


const downloadApp = () => {
  window.open('https://bufinorte.com/LeyAduanera/', '_blank', 'noopener');
};
</script>

<template>
  <Navbar />
  <main class="download-container">
    <section class="download-content">

      <!-- Título -->
      <h1 class="download-title">Ley Aduanera</h1>

      <!-- Logo -->
      <header class="logo-container">
        <div class="logo-content">
          <div class="logo-text">
            <span class="logo-main">BUFIN DEL NORTE</span>
            <span class="logo-sub">CONSULTORES DE COMERCIO EXTERIOR</span>
          </div>
          <div class="world-icon" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0077b6" class="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
            </svg>
          </div>
        </div>
      </header>

      <!-- Caja de información -->
      <section class="info-box">
        <p class="info-text">
          Descarga nuestra <strong>Ley Aduanera</strong> y mantente al día con las disposiciones legales en comercio exterior. Herramienta esencial para importadores, exportadores y consultores.
        </p>
        <div class="download-icon-container" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#00b4d8" class="download-icon" viewBox="0 0 16 16">
            <path d="M8 15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5z"/>
            <path d="M8.354 10.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          </svg>
        </div>
      </section>

      <!-- Botones -->
      <div class="download-actions">
        <a href="https://bufinorte.com/LeyAduanera/LeyAduanera.zip" download class="download-button">
          📥 Descargar Ley Aduanera
        </a>
        <a href="https://bufinorte.com/LeyAduanera/" target="_blank" rel="noopener noreferrer" class="url-link">
          🔗 Ver en el navegador
        </a>
      </div>

    </section>
  </main>
  <Footer />
</template>

<style scoped>
.download-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #003049, #191919);
  padding: 2rem 1rem;
  min-height: 100vh;
}

.download-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  gap: 2rem;
}

.download-title {
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(to right, #00b4d8, #90e0ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.logo-container {
  background-color: #e0f7ff;
  border-radius: 1rem;
  padding: 1.2rem 1.5rem;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 180, 216, 0.2);
}

.logo-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo-text {
  text-align: center;
  flex: 1;
}

.logo-main {
  display: block;
  color: #0077b6;
  font-weight: 700;
  font-size: 1rem;
}

.logo-sub {
  display: block;
  color: #005377;
  font-size: 0.7rem;
}

.world-icon {
  animation: rotate 12s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
}

.info-box {
  background-color: #ffffff;
  border-left: 6px solid #00b4d8;
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  color: #333;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.info-text {
  font-size: 1rem;
  line-height: 1.6;
}

.download-icon-container {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.download-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.download-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.download-button {
  background: linear-gradient(to right, #00b4d8, #48cae4);
  color: #ffffff;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
}

.download-button:hover {
  background: linear-gradient(to right, #48cae4, #00b4d8);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(72, 202, 228, 0.3);
}

.url-link {
  color: #ade8f4;
  font-size: 0.9rem;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.url-link:hover {
  color: #ffffff;
}

@media (prefers-reduced-motion: reduce) {
  .world-icon,
  .download-icon {
    animation: none !important;
  }
}

@media (max-width: 576px) {
  .download-title {
    font-size: 1.6rem;
  }
  .info-text {
    font-size: 0.95rem;
  }
  .download-button,
  .logo-container {
    width: 90%;
  }
}
</style>
