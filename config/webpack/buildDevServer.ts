import { type BuildOptions } from './buildTypes'
import { type Configuration } from 'webpack-dev-server'

export const buildDevServer = ({ port }: BuildOptions): Configuration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
})
