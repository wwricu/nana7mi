// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const webpack = require("webpack");

module.exports = {
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        new webpack.ProvidePlugin({
            $:"jquery",

            jQuery:"jquery",
            "windows.jQuery":"jquery"
        }),
    ],
}
