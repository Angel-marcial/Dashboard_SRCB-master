//FALTA COMPLETAR CAMPOS...
<template>
  <div>
    <Breadcrumb breadcrumb="AGREGAR MODERADOR" />
    <div class="mt-4">
      <h4 class="text-gray-600">Moderador Emergente </h4>

      <div class="mt-4">
        <div class="w-full max-w-sm  bg-white border rounded-md shadow-md">
          <form>

            <div class="titleForm flex items-center justify-between px-5 py-3 text-gray-700 border-b">
              <h3 class="text-sm">Moderadores</h3>

              <button
                class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
              Guardar
              </button>

              <button
                class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
                Cancelar
              </button>

            </div>



            <div class="titleForm flex items-center justify-between px-5 py-3 text-gray-700 border-b">
              <h3 class="text-sm">Programa</h3>

              <button
                class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
              Guardar
              </button>

              <button
                class="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none">
                Cancelar
              </button>

            </div>












          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '../partials/Breadcrumb.vue'

interface User {
  username: string
  email: string
  password: string
  confirm: string
}

const user = ref<User>({
  username: '',
  email: '',
  password: '',
  confirm: '',
})

const register = () => {
  const data = JSON.parse(JSON.stringify(user.value))
  console.log('Registered: ', data)
}
</script>

<style scoped>
form{
  width: 75vw;
}

.titleForm{
  color: var(--white);
  background-color: var(--main-blue);
  border-radius: 5px;
}

.bg-indigo-600{
    background-color: var(--main-orange)
  }

  .bg-indigo-600:hover{
    opacity: 0.8;
    scale: 1.04;
  }
</style>
