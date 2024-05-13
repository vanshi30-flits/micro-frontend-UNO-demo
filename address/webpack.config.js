const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  module: {
    rules: [
      // JavaScript and JSX files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // Font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
      // {
      //   test: /\.m?js/,
      //   type: "javascript/auto",
      //   resolve: {
      //     fullySpecified: false,
      //   },
      // },
      // {
      //   test: /\.(css|s[ac]ss)$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },
      // {
      //   test: /\.(ts|tsx|js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //   },
      // },













      // { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "address",
      filename: "remoteEntry.js",
      remotes: {
        sidebar:'sidebar@http://localhost:3003/remoteEntry.js',
        pagination: "pagination@http://localhost:3004/remoteEntry.js"
      },
      exposes: {
        "./AddressCompo":"./src/addressCompo/AddressCompo.jsx",
        "./AddressSubCompo":"./src/addressCompo/AddressSubCompo.jsx",
        "./AddressFormCompo":"./src/addressCompo/AddressFormCompo.jsx",
        "./addressReducer":"./src/redux/reducers/addressReducer.js"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
