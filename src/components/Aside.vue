<script lang="js" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(["closeMenu"]);
</script>

<template>
  <aside :class="['asideContainer', isOpen ? 'open' : 'closed']">
    <i @click="emit('closeMenu')" class="fa-solid fa-bars"></i>
    <header>
      <h1 class="asideTitle">Menu Principal</h1>
    </header>
    <div class="asideBtnDiv">
      <a class="asideBtn" href="/">
        <i class="fa-solid fa-house"></i>
        Inicio
      </a>
      <a class="asideBtn" href="#menu">
        <i class="fa-solid fa-utensils"></i>
        Menú
      </a>
      <a class="asideBtn" href="#service">
        <i class="fa-solid fa-bell-concierge"></i>
        Servicio
      </a>
      <a class="asideBtn" href="#location">
        <i class="fa-solid fa-location-dot"></i>
        Encuéntranos
      </a>
      <a class="asideBtn" href="/aboutus">
        <i class="fa-solid fa-users"></i>
        Nosotros
      </a>
      <a class="asideBtn" href="#footer">
        <i class="fa-solid fa-envelope"></i>
        Contacto
      </a>
    </div>
  </aside>
</template>

<style scoped>
.asideContainer {
  display: none;
}

@media (max-width: 768px) {
  .asideContainer {
    padding-top: 30px;
    width: 60%;
    background-color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 35px;
    position: fixed;
    top: 0;
    right: -300px;
    z-index: 999;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
    padding-inline: 25px;
    transition: all 0.3s ease-in-out;
  }

  .asideContainer.open {
    animation: sliderAside ease 0.3s forwards;
  }

  .asideContainer.closed {
    animation: sliderClose ease 0.3s forwards
  }

  .fa-bars {
    display: flex;
    justify-content: end;
    font-size: 25px;
  }

  .asideTitle {
    color: black;
  }

  .asideBtnDiv {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .asideBtn {
    text-decoration: none;
    border: none;
    background: transparent;
    color: #000000;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: 0.3s;
    padding: 10px 0;
  }

  .asideBtn i {
    font-size: 22px;
  }

  .asideBtn:hover {
    color: #222;
    background-color: rgba(201, 201, 201, 0.7);
    border-radius: 8px;
    padding-left: 10px;
  }

  @keyframes sliderClose {
    from {
      right: 0;
    }

    to {
      right: -300px;
      display: none;
    }
  }

  @keyframes sliderAside {
    from {
      right: -300px;
    }

    to {
      right: 0;
    }
  }
}
</style>
