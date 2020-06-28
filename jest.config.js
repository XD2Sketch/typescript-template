module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.spec.json',
      compilerHost: true,
    },
  },
  moduleNameMapper: {
    '^typescript-template$': '<rootDir>/src/public_api.ts',
    '^typescript-template/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/__tests__/**/*.test.ts',
  ],
};
