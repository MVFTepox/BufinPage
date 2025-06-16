<template>
  <div class="banner-container">
    <div class="banner-card">
      <!-- Capa oscura superpuesta -->
      <div class="banner-overlay" aria-hidden="true"></div>

      <!-- Imagen en círculo centrada -->
      <div class="center-image-circle">
        <img
          src="/src/assets/bn.jpg"
          alt="Logotipo Bufin del Norte"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// No JS adicional necesario
</script>

<style scoped>
/* Contenedor general del banner */
.banner-container {
  width: 100%;
}

/* Tarjeta de banner con fondo */
.banner-card {
  position: relative;
  height: 630px;
  background-image: url('/src/assets/Tipos-de-Aduanas-2.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

/* Capa oscura encima del fondo */
.banner-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

/* Imagen circular centrada */
.center-image-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ffffff;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 12px rgba(35, 151, 177, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease, height 0.3s ease;
}

/* Imagen dentro del círculo */
.center-image-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .banner-card {
    height: 260px;
  }

  .center-image-circle {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 480px) {
  .banner-card {
    height: 200px;
  }

  .center-image-circle {
    width: 90px;
    height: 90px;
  }
}
</style>
