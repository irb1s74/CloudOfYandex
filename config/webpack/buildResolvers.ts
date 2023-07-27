import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './buildTypes'

export const buildResolvers = ({ paths }: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  }
}
