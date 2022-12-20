import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    projectId: "crkxpa",
    supportFile: 'cypress/support/e2e.ts',
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://www.demoblaze.com/',
    chromeWebSecurity: false,
    env: {
      accounts: {
        active: {
          name: 'SarahConnor',
          password: '12345678',
        },
      },
    },
  },
});
