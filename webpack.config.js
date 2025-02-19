const path = require('path');

module.exports = {
    entry: './src/LinkWithTarget.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'raw-loader',
                    }
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
        library: 'LinkWithTarget',
        libraryExport: 'default',
        libraryTarget: 'umd'
    }
};
