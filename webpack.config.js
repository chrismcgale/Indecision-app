const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const CSSExtract = new MiniCssExtractPlugin({
    filename: 'styles.css'
})

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    }
                }
            ]
        },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', ''],
    fallback: {
      fs: false,
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
      CSSExtract,
  ]
};