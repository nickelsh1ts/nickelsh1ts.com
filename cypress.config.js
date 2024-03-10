const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hbwhai",
  e2e: {
    baseUrl: 'http://localhost:3024',
  },
  env: {},
  retries: {
    runMode: 2,
    openMode: 0,
  },
});
