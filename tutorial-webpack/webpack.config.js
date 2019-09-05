// プラグインを利用するために webpack を読み込んでおく
const webpack = require("webpack");

// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  // "production" | "development" | "none"
  mode: 'development',
  // エントリーポイントの設定
  entry: './src/js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  // モジュールの設定
  module: {
    rules: [
      // babel-loader
      {
        // ローダーの処理対象ファイル
        test: /\.js$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        // 利用するローダー
        loader: "babel-loader",
        // ローダーのオプション
        options: {
          presets: [['@babel/preset-env', { modules: false }]]
        }
      },
      // eslint-loader
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        // enforce: 'pre'を指定することによって、指定されてないローダーより早く処理が実行される
        // 今回は babel-loader で変換する前にコードを検証したいので、指定が必要
        enforce: "pre",
        loader: "eslint-loader"
      }
    ]
  },
  // プラグインの設定
  plugins: [
    // ProvidePlugin
    //   指定したモジュールをすべてのファイル（モジュール）の変数として利用可能にするプラグイン。
    //   利用可能にしたモジュールは import などで読み込む必要がなくなる。
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};
