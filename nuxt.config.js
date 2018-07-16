module.exports =  {
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.wonder.shop/graphql'
      }
    }
  }
}