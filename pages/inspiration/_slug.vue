<template>
<div>
  <p>STATIC LINK, does not change</p>
  <nuxt-link to="/inspiration/w-poszukiwaniu-inspiracji-jak-udekorowac-weselny-stol" class=""><img src="https://cdn.wonder.shop/inspirations/header_images/000/000/003/original/eb1426dcaf79c0dd6513ff2f1f14ac7db217b392_hd_ss17_outdoorliving_23_cw_Easy-Resize.com.jpg?1529650150" width="100">W poszukiwaniu inspiracji – jak udekorować weselny stół?
  </nuxt-link>
  <p>DINAMIC DATA BELOW</p>
  <pre>
    {{dataDump}}
  </pre>
</div>
</template>

<script>
  import query from '~/apollo/queries/getInspirationPageBySlug'
  export default {
    apollo: {
      getInspirationPageBySlug: {
        query,
        prefetch ({ route }) {
          return { slug: route.params.slug }
        },
        variables() {
          return { slug: this.$route.params.slug }
        }
      }
    },
    head() {
      console.log('process.isClient', process.isClient, process.client);
      return {
        // TODO: can do better?
        title: this.title
      }
    },
    computed: {
      dataDump () {
        return JSON.stringify(this.getInspirationPageBySlug, null, 2);
      },
      title() {
        return this.getInspirationPageBySlug ? this.getInspirationPageBySlug.name : 'wonder';
      }
    },
    created() {
      console.log('typeof this.getInspirationPageBySlug', typeof this.getInspirationPageBySlug);
    }
    // The below works as well
    /*async created() {
      const result = await this.$apollo.query({
        query: query,
        variables: {
          slug: this.$route.params.slug
        }
      });
      console.log('testing from created', result);
    }*/
  }
</script>

<style>
    img {
        max-width: 600px;
    }
</style>