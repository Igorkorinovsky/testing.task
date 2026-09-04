import type { Options } from '@wdio/types'
import chromedriver from 'chromedriver'

process.env.CHROMEDRIVER_PATH = chromedriver.path

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./test/specs/**/*.ts'],
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome'
  }],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
      esm: true,
      files: true
    }
  }
}
