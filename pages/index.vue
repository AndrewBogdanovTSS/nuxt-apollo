
<template>
    <div>
        <h3>Inspirations</h3>
        <ul>
            <li v-for="inspiration in allInspirations" :key="inspiration.id">
                <nuxt-link :to="`inspiration/${inspiration.slug}`">
                    <img :src="inspiration.header_image_small_url" width="100"/>{{ inspiration.name }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
  import query from '~/apollo/queries/getAllInspirations'
  export default {
    apollo: {
      allInspirations: {
        prefetch: true,
        query
      }
    },
    head: {
      title: 'Inspirations with Apollo and testing some stuff'
    },
    created() {
        console.log('this.allInspirations', this.allInspirations);
    }
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