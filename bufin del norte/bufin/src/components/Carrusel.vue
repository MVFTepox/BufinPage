<template>
  <div class="carousel-container my-4">
    <div class="container">
      <div class="card carousel-card animate__animated animate__fadeIn">
        <div class="card-body p-0">
          <div
            id="companyCarousel"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3000"
            data-bs-pause="hover"
          >
            <!-- Indicadores -->
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#companyCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#companyCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#companyCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <!-- Slides -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="carousel-content d-flex align-items-center justify-content-center">
                  <h2 class="display-1 fw-bold company-blue animate__animated animate__fadeInUp">BN</h2>
                </div>
              </div>
              <div class="carousel-item">
                <div class="carousel-content d-flex align-items-center justify-content-center">
                  <img src="/src/assets/bn.jpg" alt="Logo BN" class="img-fluid carousel-logo animate__animated animate__fadeInUp" />
                </div>
              </div>
              <div class="carousel-item">
                <div class="carousel-content d-flex align-items-center justify-content-center">
                  <img src="/src/assets/bufin del norte.jpg" alt="Bufin del Norte" class="img-fluid rounded shadow-sm animate__animated animate__fadeInUp" />
                </div>
              </div>
            </div>

            <!-- Flechas personalizadas -->
            <button class="custom-carousel-control prev" type="button" data-bs-target="#companyCarousel" data-bs-slide="prev">
              <span aria-hidden="true">←</span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="custom-carousel-control next" type="button" data-bs-target="#companyCarousel" data-bs-slide="next">
              <span aria-hidden="true">→</span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No se requiere lógica en <script> por ahora
</script>

<style scoped>
.carousel-container {
  width: 100%;
}

.carousel-card {
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.carousel-card:hover {
  transform: translateY(-3px);
}

.carousel-content {
  height: 400px;
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
}

.carousel-logo {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

.carousel-indicators button {
  background-color: #0e4b6b;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 6px;
  border: none;
}

.custom-carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0e4b6b;
  color: white;
  border: none;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.custom-carousel-control:hover {
  transform: translateY(-50%) scale(1.1);
}

.custom-carousel-control.prev {
  left: 10px;
}

.custom-carousel-control.next {
  right: 10px;
}

@media (max-width: 768px) {
  .carousel-content {
    height: 300px;
    padding: 1rem;
  }

  .carousel-logo {
    height: 140px;
    width: 140px;
  }

  .display-1 {
    font-size: 3rem;
  }

  .custom-carousel-control {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
