<template>
  <div>
    <apexchart
      width="380"
      type="donut"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const options = ref({});
const series = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:1234/areas");
    const data = response.data;

    const labels = data.map((item) => item.AREA);
    const dataPoints = data.map((item) => item.NoDeAreas);

    series.value = dataPoints;
    options.value = {
      labels: labels,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>
