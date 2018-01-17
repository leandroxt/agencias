import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {

  entry: './src/index.jsx',

  output: {
    path: __dirname.concat('/dist'),
    filename: 'agencias.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|react-commons)/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ],

          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties'
          ]
        }
      },

      {
        test: /\.(png|jpg|jpeg|tiff|woff|woff2|eot|svg|ttf)(\?v=(.*))?$/,
        loader: 'file-loader'
      },

      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },

      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html'
    })
  ],

  devServer: {
    hot: true,
    inline: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: 3123,
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }

};

export default config;
