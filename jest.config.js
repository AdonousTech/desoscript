const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/packages/*/jest.config.js"
  ],
  testPathIgnorePatterns: ["/node_modules/"],
  coveragePathIgnorePatterns: ["/node_modules/", "/__fixtures__/"],
};