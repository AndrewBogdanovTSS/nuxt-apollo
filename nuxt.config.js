module.exports =  {
  modules: ['@nuxtjs/apollo', '@/modules/typescript.ts'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.wonder.shop/graphql'
      }
    }
  }
}