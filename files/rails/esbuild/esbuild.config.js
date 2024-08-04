const esbuild = require('esbuild')
const baseConfig = require('./esbuild.config.base')

esbuild.build(baseConfig).catch(() => process.exit(1))
