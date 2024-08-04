const dotenv = require('dotenv');
dotenv.config();


const baseConfig = {
  entryPoints: ['app/javascript/*.*'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  loader: { '.js': 'jsx' },
  define: {
    'process.env.PUBLIC_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.PUBLIC_GOOGLE_MAPS_API_KEY || "")
  },
};

module.exports = baseConfig;

