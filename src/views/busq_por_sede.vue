<template>
  <div>
      <div class="mt-4">
          <label for="idTra">

            SELECCIÓN DE CEDE


          </label>
      <select id="idTra" v-model="selectedSalon" @change="fetchData">
        <option v-for="idTra in idTraList" :key="idTra.Salon" :value="idTra.Salon">
          {{ idTra.Salon }}
        </option>
      </select>
    </div>
    <div class="mt-8"></div>
    <div class="flex flex-col mt-8">
      <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div
          class="
            inline-block
            min-w-full
            overflow-hidden
            align-middle
            border-b border-gray-200
            shadow
            sm:rounded-lg
          "
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                 Equipo 
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Integrantes 
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Id's Integrantes 
                </th>
                <th
                  class="
                    px-6
                    py-3
                    text-xs
                    font-medium
                    leading-4
                    tracking-wider
                    text-left text-gray-500
                    uppercase
                    border-b border-gray-200
                    bg-gray-50
                  "
                >
                  Numero De Integrantes
                </th>
                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>

            <tbody class="bg-white">
              <tr v-for="(u, index) in users" :key="index">
<td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
  <div class="text-sm font-medium leading-5 text-gray-900">
    {{ u.ID_Tra }}
  </div>
</td>

<td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
  <div class="text-sm font-medium leading-5 text-gray-900">
    <div v-for="(ponente, index) in u.Ponentes" :key="index">
      {{ ponente }}
      <span v-if="index !== u.Ponentes.length - 1"><br /></span>
    </div>
  </div>
</td>

<td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
  <div class="text-sm font-medium leading-5 text-gray-900">
    <!-- Iterate through each ID in the ID_pons array -->
    <div v-for="(id, index) in u.ID_pons" :key="index">
      {{ id }}
      <!-- Add a line break after each ID, excluding the last one -->
      <span v-if="index !== u.ID_pons.length - 1"><br /></span>
    </div>
  </div>
</td>

<td class="px-6 py-4 border-b border-gray-200 whitespace-nowrap">
  <div class="text-sm font-medium leading-5 text-gray-900">
    {{ u.NoPonentes }}
  </div>
</td>

                <td
                  class="
                    px-6
                    py-4
                    text-sm
                    font-medium
                    leading-5
                    text-right
                    border-b border-gray-200
                    whitespace-nowrap
                  "
                >
                  <div class="flex justify-around">
                    <span class="text-yellow-500 flex justify-center">
                      <!-- Add your edit and delete buttons here -->
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface User {
  equipo: string;
  Ponentes: string[];
  ID_pons: string[];
  Num_Integrantes: string;
}

const users = ref<User[]>([]);
const idTraList = ref<{ Salon: string }[]>([]);
const selectedSalon = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get<{ Salon: string }[]>('http://localhost:1234/sedes');
    idTraList.value = response.data;
    if (idTraList.value.length > 0) {
      selectedSalon.value = idTraList.value[0].Salon;
      fetchData();
    }
  } catch (error) {
    console.error('Error fetching sedes data:', error);
  }
});

const fetchData = async () => {
  try {
    if (selectedSalon.value) {
      console.log('Selected Salon:', selectedSalon.value);
      const response = await axios.post<User[]>('http://localhost:1234/informacion_por_salones', {
        Salon: selectedSalon.value,
      });

      users.value = response.data.map(user => ({
        ...user,
        Ponentes: JSON.parse(user.Ponentes),
        ID_pons: JSON.parse(user.ID_Pons),
      }));
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
</script>
<style>
label{
  font-weight:bold;
  color: var(--main-orange);
}

th.px-6{
  color: var(--main-blue);
}
</style>



