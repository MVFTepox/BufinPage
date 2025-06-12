<script setup>
import { ref } from 'vue'

const navigationLinks = ref([
  { text: 'Inicio', href: '/' },
  { text: 'Servicios', href: '/' },
  { text: 'Sobre nosotros', href: '/sobre' },
  { text: 'Explorar', href: '/programa' }
]);

const contactEmail = ref('lcomtradesoft@gmail.com');
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Contacto -->
        <div class="footer-column">
          <h5 class="footer-title">PONTE EN CONTACTO</h5>
          <a :href="'mailto:' + contactEmail" class="footer-email">{{ contactEmail }}</a>
        </div>

        <!-- Navegación -->
        <div class="footer-column">
          <h5 class="footer-title">Explora</h5>
          <ul class="footer-nav">
            <li v-for="link in navigationLinks" :key="link.text">
              <router-link :to="link.href" class="footer-link">{{ link.text }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Logo y lema -->
        <div class="footer-column logo-column">
          <h2 class="logo-text">BUFIN DEL NORTE</h2>
          <p class="logo-subtitle">CONSULTORES DE COMERCIO EXTERIOR</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background-color: #3f649b;
  color: #fff;
  padding: 3rem 1rem 1rem;
  font-family: 'Arial', sans-serif;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
}

.footer-column {
  flex: 1 1 200px;
  min-width: 200px;
}

.footer-title {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.footer-email {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  transition: color 0.3s ease;
  margin-bottom: 0.5rem;
}

.footer-email:hover {
  color: #e89d33;
}

.footer-nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.7rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #e89d33;
}

.logo-column {
  text-align: right;
}

.logo-text {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

.logo-subtitle {
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.footer-bottom {
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #ddd;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-column {
    text-align: center;
  }

  .logo-text {
    font-size: 1.5rem;
  }

  .logo-subtitle {
    font-size: 0.8rem;
  }
}
</style>
