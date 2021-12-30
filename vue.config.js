module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            Vue: 'vue',
            'vue': 'Vue',
            'jquery': '$',
            '$': 'jquery',
            ElementPlus: 'element-plus',
            'element-plus': 'ElementPlus'
        }
    },
}