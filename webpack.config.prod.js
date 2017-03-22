var webpack = require('webpack');

module.exports = {
   entry: [
      './src/index.js'
   ],
   output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
   },
   module: {
      loaders: [{
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['react', 'es2015', 'stage-1']
         }
      }]
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   plugins: [
      new webpack.DefinePlugin({ //<--key to reduce React's size
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
   ],
   devServer: {
      historyApiFallback: true,
      contentBase: './'
   }
};
