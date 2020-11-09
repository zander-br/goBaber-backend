const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/modules/**/services/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
};
