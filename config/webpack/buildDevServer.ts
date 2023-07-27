import { type Configuration } from 'webpack-dev-server'
import { type BuildOptions } from './buildTypes'

export const buildDevServer = ({ port }: BuildOptions): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
})
