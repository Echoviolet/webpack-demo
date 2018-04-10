var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    // postcss: [
    //   require('autoprefixer')({
    //       browsers: ['last 5 versions']
    //   })
    // ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'webpack learning',
            data: new Date()
        })
    ]
}