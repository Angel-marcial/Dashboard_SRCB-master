<template>
  <div class="bg flex">
    <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="
          fixed
          inset-0
          z-20
          transition-opacity
          bg-black
          opacity-50
          
        "></div>

    <div :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'" class="
          fixed
          inset-y-0
          left-0
          z-30
          w-64
          overflow-y-auto
          transition
          duration-300
          transform
          bg-gray-900
          lg:translate-x-0 lg:static lg:inset-0
          main
        ">
      <div class="main_mainTitle">
        SESION INICIADA
      </div>

      <div class="main__username">Mauro Sánchez Sánches</div>

      <div class="main__usercard">
        <div class="usercard__photo"></div>
        <div class="usercard__options">
          <div class="usercard__options___logout">Salir</div>
          <div class="usercard__options___mainOptions">
            <div class="usercard__options___mainOptions___loginInfo">Inicio de mi sesión</div>
            <div class="usercard__options___mainOptions___alerts">Avisos</div>
            <div class="usercard__options___mainOptions___downloads">Descargas</div>
            <div class="usercard__options___mainOptions___card">Mi Ficha de Datos</div>
          </div>
        </div>
      </div>


      <nav class="mt-10">
        <p class="banner banner_delfin text-xs font-semibold text-gray-400">Programa Delfin</p>
        <p class="banner banner_general  text-xs font-semibold text-gray-400">General</p>
        <router-link class="routerlink   flex items-center px-6 py-2  duration-200"
          :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]" to="/dashboard">
          <span class="mx-4">Buscar Equipos</span>
        </router-link>






        <router-link class="routerlink flex items-center px-6 py-2 duration-200"
          :class="[$route.name === 'SEDES' ? activeClass : inactiveClass]" to="/busq_por_sede">
          <span class="mx-4">Buscar Por Sede</span>
        </router-link>


        <router-link v-show="tipoUsuario !== 'Mauro'" class="routerlink flex items-center px-6 py-2 duration-200"
          :class="[$route.name === 'pase_de_lista' ? activeClass : inactiveClass]" to="/pase_de_lista">

          <span class="mx-4">Pase de Lista</span>
        </router-link>


        <router-link class="routerlink flex items-center px-6 py-2 duration-200 "
          :class="[$route.name === 'Chart' ? activeClass : inactiveClass]" to="/Pase_de_lista_moderador">

          <span class="mx-4">Pase de Lista Mod.</span>
        </router-link>


        <p class="banner banner_options pl-4 my-2 text-xs font-semibold text-gray-400">
          Opciones
        </p>

        <router-link class="routerlink flex items-center px-6 py-2  duration-200"
          :class="[$route.name === 'Chart' ? activeClass : inactiveClass]" to="/charts">

          <span class="mx-4">Graficas Descriptivas</span>
        </router-link>


        <router-link v-show="tipoUsuario !== 'Mauro'" class="routerlink flex items-center px-6 py-2  duration-200"
          :class="[$route.name === 'cronometro' ? activeClass : inactiveClass]" to="/cronometro">

          <span class="mx-4">Cronometro</span>
        </router-link>


        <router-link class="routerlink flex items-center px-6 py-2 duration-200"
          :class="[$route.name === 'agregar_moderador' ? activeClass : inactiveClass]" to="/agregar_moderador">

          <span class="mx-4">Agregar Moderador</span>
        </router-link>


        <router-link class="routerlink flex items-center px-6 py-2 duration-200"
          :class="[$route.name === 'cargar' ? activeClass : inactiveClass]" to="/cargar">

          <span class="mx-4">Cargar Datos</span>
        </router-link>


      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

const tipoUsuario = ref("otracosa");
const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);

</script>

<style scoped>
.routerlink {
  font-family: "Raleway", sans-serif;
  font-size: 1.1vw;
}

.router-link-active,
.router-link-exact-active {
  color: var(--main-orange);
}

.bg {
  background-color: var(--main-light);
  height: 100vh;
  overflow: hidden;
  margin: 2vw 0;
}

.main {
  background-color: var(--white);
  margin-top: 2.2vw;
  margin-left: 9.4vw;
  width: 17vw;
  overflow: visible;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.main_mainTitle {
  font-size: 1vw;
  font-family: "Raleway", sans-serif;
  color: var(--white);
  background-image: linear-gradient(to top,
      #021d3a,
      #0a3054,
      #13446e,
      #195a8a,
      #1e71a7);
  padding: 0.5vw;
  border-top-left-radius: 0.4vw;
  border-top-right-radius: 0.4vw;
  margin-bottom: 1vw;
}

.main__username {
  width: 94%;
  font-size: 1vw;
  font-family: "Raleway", sans-serif;
  color: var(--main-dark-blue);
  border-bottom: 2px solid #ccc;
  margin: 0 0.4vw;
  padding-bottom: 0.2vw;
  text-align: right;
  font-weight: bolder;

}

.main__usercard {
  display: flex;
  padding: 0 0.4vw;
  margin: 0.4vw 0;
}

.usercard__photo {
  width: 6vw;
  height: 6vw;
  background-color: #ccc;
}

.main__usercard {
  font-size: 0.8vw;
  cursor: pointer;
}

.usercard__options {
  width: 12vw;
  padding: 0 0.4vw;
}

.usercard__options___logout {
  color: var(--main-orange);
  text-align: right;
  font-weight: bold;
}

.usercard__options___logout:hover {
  color: #000;
}

.usercard__options___mainOptions {
  text-align: left;
}

.usercard__options___mainOptions___loginInfo:hover,
.usercard__options___mainOptions___alerts:hover,
.usercard__options___mainOptions___downloads:hover,
.usercard__options___mainOptions___card:hover {
  color: var(--main-blue);
  font-weight: bold;
}

.banner {
  background-color: var(--main-dark-blue);
  color: var(--white);
  padding: 0.5vw 0.4vw;
  text-align: right;
}

.banner_delfin {
  background-color: var(--main-orange);
  text-align: center;
  font-size: 1.1vw;
}
</style>