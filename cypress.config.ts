import {defineConfig} from 'cypress';

export default defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        charts: false,
        html: true,
        json: false,
        reportDir: 'reports',
        reportFilename: 'report'
    },
    e2e: {
        specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
        video: false,
        viewportHeight: 1920,
        viewportWidth: 1080,
        baseUrl: 'https://www.demoblaze.com/',
        chromeWebSecurity: false,
        env: {
            accounts: {
                user: {
                    userName: 'SarahConnor',
                    password: '12345678'
                }
            },
        }
    },
});
