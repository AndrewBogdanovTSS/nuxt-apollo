module.exports =  {
  modules: ['@nuxtjs/apollo', '@/modules/typescript.ts'],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu'
      }
    }
  }
}