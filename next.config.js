const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const isProd = process.env.NODE_ENV === 'production'

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
    }
  }

  return { // Deployments https://github.com/zeit/next.js/wiki/Deployment
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
    compression: false, // Assume offloading gzipiing to nginx or something else
    distDir: 'build',
    env: {
      customKey: 'value',
    },
    generateBuildId: async () => {
      // For example get the latest git commit hash here
      // return 'my-build-id'
      return null
    },
    onDemandEntries: {
      // period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 25 * 1000,
      // number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 10,
    },
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    poweredByHeader: false,
    target: 'serverless', // See https://nextjs.org/docs#one-level-lower
  }
}

// IE11 supported by adding a promise polyfill, all other polyfills need to be manually added https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
