const esbuild = require('esbuild')
const baseConfig = require('./esbuild.config.base')

const runBuild = async () => {
  const ctx = await esbuild.context(baseConfig)
  await ctx.watch()
}

runBuild().catch(() => process.exit(1))
