// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    trace: 'on',
    screenshot: 'only-on-failure',
    headless: true,
    video: 'on',
    baseURL: 'https://restful-booker.herokuapp.com/'
  },

  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  timeout: 30*1000,
  
  expect:{
    timeout: 5000
  }
});

