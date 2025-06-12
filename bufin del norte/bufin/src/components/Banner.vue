<template>
  <div class="banner-container  ">
    <div class="banner-card ">
      <!-- Overlay semitransparente -->
      <div class="banner-overlay"></div>
      <!-- Imagen central superpuesta en círculo -->
      <div class="center-image-circle">
        <img
          src="/src/assets/bn.jpg"
          alt="Elemento Central"
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
.banner-container {
  width: 100%;
}

.banner-card {
  position: relative;
  height:630px; /* Ajusta la altura según necesites */
  background-image: url('/src/assets/Tipos-de-Aduanas-2.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}


/* Capa semitransparente sobre el fondo */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Negro al 40% */
}

/* Contenedor circular para la imagen central */
.center-image-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; /* opcional, para dar contraste */
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.center-image-circle img {
  width: 100%;
  height: auto;
  object-fit: cover;
  /* Si la imagen no es cuadrada, centramos la parte central */
  object-position: center;
}

/* Responsive: ajusta círculo en móviles */
@media (max-width: 768px) {
  .banner-card {
    height: 200px;
  }
  .center-image-circle {
    width: 100px;
    height: 100px;
  }
}
</style>
