module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    PATH: 'http://localhost:4444',
  },
  testMatch: ['**/__test/**/*.test.js'],
};
