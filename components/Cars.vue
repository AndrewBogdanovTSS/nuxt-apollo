<template>
    <div>
        <h3>Cars</h3>
        <ul>
            <li v-for="car in allCars" :key="car.id">
                <nuxt-link :to="`car/${car.id}`">
                    {{ car.year }} {{ car.make }} {{ car.model }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import allCars from '~/apollo/queries/allCars.graphql'

  @Component({
    apollo: {
      allCars: {
        prefetch: true,
        query: allCars
      }
    }
  })
  export default class extends Vue {
  }
</script>

<style scoped>

</style>