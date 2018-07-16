<template>
    <Inspirations />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import Inspirations from '@/components/Inspirations'

  @Component({
    components: { Inspirations },
    head : {
      title: 'This title is overwritten by the one from Inspirations component'
    }
  } as any)
  export default class extends Vue {

  }
</script>