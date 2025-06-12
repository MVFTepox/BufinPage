<template>
  <nav class="navbar navbar-expand-lg company-bg-blue sticky-top shadow-sm" aria-label="Menú principal">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img src="/src/assets/bn.jpg" alt="Logo Bufin del Norte" height="60" class="logo" />
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li v-for="(item, index) in navItems" :key="item.name" class="nav-item" :style="{ animationDelay: `${index * 0.2}s` }">
            <router-link class="nav-link text-white fade-in" :to="item.link">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { name: "Servicios", link: "/" },
  { name: "Sobre Nosotros", link: "/sobre" },
  { name: "Consultoría", link: "/consultoria" },
  { name: "Auditoria", link: "/auditoria" },
  { name: "Contactos", link: "/contactos" },
  { name: "Programa", link: "/programa" }
]
</script>

<style scoped>
.navbar {
  height: 70px;
  padding: 0;
}

.logo {
  border: 3px solid rgba(243, 154, 23, 1);
  border-radius: 50%;
  transition: transform 0.3s ease;
}
.logo:hover {
  transform: scale(1.1);
}

.navbar-collapse {
  justify-content: center;
  background-color: rgba(63, 100, 155, 1);
}

.nav-link {
  margin: 0 12px;
  font-weight: 500;
  position: relative;
  padding: 8px 0;
  transition: all 0.3s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
.nav-link:hover {
  transform: translateY(-2px);
}

.nav-item {
  animation: fadeInRight 0.6s ease forwards;
  opacity: 0;
}

@keyframes fadeInRight {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 991.98px) {
  .navbar-collapse {
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  .navbar-brand {
    display: flex !important;
  }
}
</style>
