module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        externals: {
            // 'vue': 'Vue',
            'jquery': '$',
            // 'element-plus': 'ElementPlus'
        }
    },
    // chainWebpack: config => {
    //     config.module
    //         .rule('images')
    //         .use('image-webpack-loader')
    //         .loader('image-webpack-loader')
    //         .options({
    //             bypassOnDebug: true
    //         })
    //         .end()
    // }
}