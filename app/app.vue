<template>
  <NuxtLayout>
    <q-input v-model="name" />
    <q-button class="d-flex mx-auto mt-4" @click="saveName">
      Buscar
    </q-button>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('')

function saveName () {
  console.log(name.value)
}

</script>
