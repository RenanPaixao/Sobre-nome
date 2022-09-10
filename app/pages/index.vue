<template>
  <div class="container row row-cols-1">
    <div class="mx-auto col-8">
      <q-input v-model="name" :disabled="isLoading" />
    </div>

    <div style="min-height: 40vh">
      <q-button :loading="isLoading" class="d-flex mx-auto mt-4" @click="searchName">
        Buscar
      </q-button>

      <h1 v-if="info.frequency && info.name" class="text-center mt-5 pt-3">
        Existem {{ info.frequency }} pessoas chamadas {{ capitalize(info.name) }} no Brasil.
      </h1>
    </div>

    <div class="col-3 ms-auto mt-auto">
      <q-button class="ms-auto d-block mt-5">
        Os mais populares
      </q-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { IBGE } from '@/services/IBGE'
import { capitalize } from 'radash'

interface Info {
	frequency: number
	name: string
}

const name = ref('')
const isLoading = ref(false)

const info = reactive<Info>({
  frequency: 0,
  name: ''
})

async function searchName() {
  try {
    if (!name.value.trim()) {
      return
    }
    isLoading.value = true

    const [data] = await IBGE.getName(name.value)

    info.frequency = data.res.at(-1).frequencia
	  info.name = data.nome
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

</script>
