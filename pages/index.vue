<template>
    <div class="">
        <cars></cars>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import Cars from '@/components/Cars'

  @Component({
    components: { Cars },
    head : {
      title: 'Cars with Apollo'
    }
  })
  export default class extends Vue {

  }
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        line-height: 1.6;
    }

    a {
        text-decoration: none;
        color: #3498DB;
    }

    a:hover {
        border-bottom: 1px solid;
    }
</style>