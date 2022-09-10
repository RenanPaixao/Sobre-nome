<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Nome</th>
        <th>Frequência</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({rank, name, frequency}) in props.popularNames" :key="rank">
        <td><strong>{{ rank }}</strong></td>
        <td>{{ capitalize(name) }}</td>
        <td>{{ frequency }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { capitalize } from 'radash'

export interface PopularNames {
	rank: number
	name: string
	frequency: number
}

const props = defineProps<{
	popularNames: {
		rank: number
		name: string
		frequency: number
	}[]
}>()
</script>
