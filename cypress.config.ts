import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    charts: false,
    html: true,
    json: false,
    reportDir: 'reports',
    reportFilename: 'report',
  },
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://www.demoblaze.com/',
    chromeWebSecurity: false,
    env: {
      baseApiUrl:'https://api.demoblaze.com/bycat',
      accounts: {
        active: {
          name: 'SarahConnor',
          password: '12345678',
        },
      },
    },
  },
});