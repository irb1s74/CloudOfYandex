import { type Configuration } from 'webpack'
import path from 'path'
import { type BuildEnv, type BuildMode, type BuildPaths } from './config/webpack/buildTypes'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'

function getApiUrl(mode: BuildMode, apiUrl?: string) {
  if (apiUrl) {
    return apiUrl
  }
  if (mode === 'production') {
    return '/api'
  }
  return 'http://localhost:5000'
}

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    logo: path.resolve(__dirname, 'public', 'favicon.ico'),
  }

  const mode = env?.mode || 'development'
  const PORT = env?.port || 3000
  const isDev = mode === 'development'
  const apiUrl = getApiUrl(mode, env?.apiUrl)

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  })

  return config
}
