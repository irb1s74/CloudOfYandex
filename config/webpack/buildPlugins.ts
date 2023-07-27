import { DefinePlugin, type WebpackPluginInstance } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { type BuildOptions } from './buildTypes'

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  clientID,
}: BuildOptions): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __CLIENT_ID__: JSON.stringify(clientID),
    }),
  ]

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
    if (paths.logo) {
      plugins.push(
        new CopyPlugin({
          patterns: [{ from: paths.logo, to: paths.build }],
        }),
      )
    }
  }
  return plugins
}
