<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const termsAccepted = ref(false)

const submitForm = () => {
  if (!termsAccepted.value) {
    alert('Por favor acepta los términos y condiciones')
    return
  }

  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert('Por favor completa todos los campos')
    return
  }

  console.log('Form submitted:', formData.value)
  alert('Formulario enviado correctamente')

  // Reset form
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
  termsAccepted.value = false
}
</script>

<template>
  <Navbar />
  <div class="contact-wrapper">
    <div class="container justify-content-center">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="contact-title">CONTÁCTANOS</div>

          <!-- Formulario -->
          <div class="form-container">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="name" v-model="formData.name" />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" class="form-control" id="email" v-model="formData.email" />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Asunto</label>
              <textarea class="form-control" id="message" rows="4" v-model="formData.message"></textarea>
            </div>

            <div class="terms-container">
              <input type="checkbox" id="terms" class="terms-checkbox" v-model="termsAccepted" />
              <label for="terms" class="form-label small">Acepto los términos y condiciones</label>
            </div>

            <button type="button" class="btn-submit" @click="submitForm">Enviar</button>
          </div>

          <!-- Información de contacto -->
          <div class="contact-info-container">
            <div class="row">
              <div class="col-md-6">
                <div class="contact-info-title">Correos Electrónicos</div>
                <div class="contact-card">
                  <div class="icon-container"><i class="bi bi-envelope"></i></div>
                  <div class="contact-info">jtorres@aienvh.mx</div>
                </div>
                <div class="contact-card">
                  <div class="icon-container"><i class="bi bi-envelope"></i></div>
                  <div class="contact-info">lcomtradesoft@gmail.com</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-info-title">Teléfonos</div>
                <div class="contact-card">
                  <div class="icon-container"><i class="bi bi-telephone-plus"></i></div>
                  <div class="contact-info">(477) 213 4833</div>
                </div>
                <div class="contact-card">
                  <div class="icon-container"><i class="bi bi-telephone"></i></div>
                  <div class="contact-info">477 213 4835</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.contact-wrapper {
  background-color: #0e0e0e;
  color: white;
  padding: 3rem 1rem 5rem;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.contact-title {
  background: linear-gradient(135deg, #4e9af1, #6acdfc);
  color: #0e0e0e;
  padding: 10px 24px;
  border-radius: 20px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 30px;
  font-size: 1.8rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.form-container {
  background-color: #1e1e1e;
  border: 1px solid #3f649b;
  border-radius: 16px;
  padding: 25px;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.form-label {
  font-weight: 600;
  color: #e0e0e0;
}

.form-control {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #888;
  color: white;
  border-radius: 0;
  padding: 10px 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-control:focus {
  box-shadow: none;
  border-color: #4e9af1;
  background-color: transparent;
  color: white;
}

.btn-submit {
  background: linear-gradient(135deg, #43cea2, #185a9d);
  color: white;
  border: none;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 15px;
  transition: background 0.3s, transform 0.2s;
}

.btn-submit:hover {
  background: linear-gradient(135deg, #2bc4ad, #1b6fa8);
  transform: translateY(-2px);
}

.terms-container {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.terms-checkbox {
  margin-right: 10px;
  accent-color: #4e9af1;
}

.contact-info-container {
  background-color: #1e1e1e;
  border: 1px solid #3f649b;
  border-radius: 16px;
  padding: 25px;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.contact-info-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #a0c4ff;
  text-transform: uppercase;
  font-size: 1rem;
}

.contact-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #2c2c2c, #3b3b3b);
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
  transition: background 0.3s;
}

.contact-card:hover {
  background: linear-gradient(135deg, #3f649b, #6acdfc);
}

.icon-container {
  font-size: 1.3rem;
  color: #a0c4ff;
  margin-right: 12px;
}

.contact-info {
  font-size: 0.95rem;
  color: #ffffff;
  width: 100%;
  border-bottom: 1px solid #444;
  padding-bottom: 4px;
}
</style>
