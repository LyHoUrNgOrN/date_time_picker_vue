<template>
  <main>
    <input type="file" accept=".xls,.xlsx" @change="importFromExcel">
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { importSheet } from '@/importExcel'

// const datas = ref([])

// const fetchData = async () => {
//   const res = await fetch('https://reqres.in/api/users').then(response => response.json())
//   datas.value = res.data
// }


// fetchData()

const importFromExcel = (event: Event) => {
  const datas = importSheet(event)
  console.log('1', datas);
}




</script>
