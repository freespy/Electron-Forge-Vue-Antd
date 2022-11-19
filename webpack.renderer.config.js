const rules = require('./webpack.rules');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

function resolve(dir) {
    return path.join(__dirname, dir);
}

rules.push({
    test: /\.vue$/,
    loader: 'vue-loader'
});

rules.push({
    test: /\.less$/,
    use: [
        { loader: 'style-loader' }, 
        { loader: 'css-loader' }, 
        {loader: 'less-loader',
        options: {
            lessOptions: {
                modifyVars: {
                    'primary-color': '#ff6900',
                    'link-color': '#ff6900',
                    'border-radius-base': '4px',
                },
                javascriptEnabled: true,
            }
        }
    }]
});

rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [{
        loader: 'file-loader',
    }, ],
});

module.exports = {
    // Put your normal webpack config below here
    resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".less"],
        alias: {
            "@": resolve("src/renderer/Vue"),
        },
    },
    module: {
        rules,
    },
    plugins: [
        //     // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin(),
    ]
};