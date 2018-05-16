// const webpack = require('webpack');
// const path = require('path');

// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/public/services');

// module.exports = [
//   {
//     plugins: [
//       new webpack.DefinePlugin({
//         BASE_URL: JSON.stringify('http://localhost:3001'),
//       })
//     ],
//     entry: `${SRC_DIR}/server.jsx`,
//     output: {
//       filename: 'app-server.js',
//       path: DIST_DIR
//     },
//     module : {
//       loaders : [
//         {
//           test : /\.jsx?/,
//           include : SRC_DIR,
//           loader : 'babel-loader',      
//           query: {
//             presets: ['react', 'es2015']
//           }
//         },
//         {
//           test: /\.css$/,
//           use: [ 'style-loader', 'css-loader' ]
//         }
//       ]
//     },
//     resolve: { 
//       alias: { 
//         'react': path.resolve(__dirname, 'node_modules', 'react') 
//     } }
//   },
//   {
//     plugins: [
//       new webpack.DefinePlugin({
//         BASE_URL: JSON.stringify('http://localhost:3001'),
//       })
//     ],
//     entry: `${SRC_DIR}/index.jsx`,
//     output: {
//       filename: 'app.js',
//       path: DIST_DIR
//     },
//     module : {
//       loaders : [
//         {
//           test : /\.jsx?/,
//           include : SRC_DIR,
//           loader : 'babel-loader',      
//           query: {
//             presets: ['react', 'es2015']
//           }
//         },
//         {
//           test: /\.css$/,
//           use: [ 'style-loader', 'css-loader' ]
//         }
//       ]
//     },
//     resolve: { 
//       alias: { 
//         'react': path.resolve(__dirname, 'node_modules', 'react') 
//     } }
//   },  
// ];

const webpack = require('webpack');
const path = require('path');

// See: https://stackoverflow.com/questions/37788142/webpack-for-back-end

const common = {
  context: __dirname + '/client/src',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  }
};

const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/public/services',
    filename: 'app.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/public/services',
    filename: 'app-server.js',
    library: '',
    libraryTarget: 'commonjs'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];

