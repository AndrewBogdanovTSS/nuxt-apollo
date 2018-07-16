// Adding getTransformer to properly parse .graphql files
const getTransformer = require('ts-transform-graphql-tag').getTransformer

module.exports = function () {
    // Add .ts & .tsx extension to Nuxt
    this.nuxt.options.extensions.push('ts', 'tsx')

    // Extend webpack build
    this.extendBuild(config => {
        // Add TypeScript
        config.module.rules.push({
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/\.vue$/],
                //Adding custom options for .graphql
                getCustomTransformers: () => ({ before: [getTransformer()] })
            }
        })

        // Add .ts extension in webpack resolve
        if (! config.resolve.extensions.includes('.ts')) {
            config.resolve.extensions.push('.ts')
        }

        // Add .tsx extension in webpack resolve
        if (! config.resolve.extensions.includes('.tsx')) {
            config.resolve.extensions.push('.tsx')
        }
    })
}