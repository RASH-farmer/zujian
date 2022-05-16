const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
configureWebpack: (config) => {
    config.resolve.alias = {
        ...config.resolve.alias,

        // 加上这句
        'vue$': 'vue/dist/vue.esm.js'
    }
}