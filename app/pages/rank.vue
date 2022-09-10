<template>
  <div class="row row-cols-6 ">
    <div class="col-6">
      <RankTable :popular-names="popularNames[0]" />
    </div>
    <div class="col-6">
      <RankTable :popular-names="popularNames[1]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import RankTable, { PopularNames } from '@/components/RankTable.vue'
import { IBGE } from '@/services/IBGE'
import { cluster } from 'radash'
import { onBeforeMount } from '#imports'
import { ref } from 'vue'

const popularNames = ref<PopularNames[][]>([])

onBeforeMount(async() => {
  const data = await IBGE.getPopularNames()

  const names = data.map(({ nome, rank, freq }) => {
    return {
      rank,
      name: nome,
      frequency: freq.toLocaleString()
    }
  })

  popularNames.value = cluster([...names], 10)
})
</script>
