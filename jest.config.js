const paths = require('./webpack/helpers/paths');

module.exports = async () => ({
  bail: 1,
  coverageDirectory: paths.appTestsCoverage,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@Api/(.*)': '<rootDir>/src/api/$1',
    '@Assets/(.*)': '<rootDir>/src/assets/$1',
    '@Components/(.*)': '<rootDir>/src/components/$1',
    '@Config/(.*)': '<rootDir>/src/config/$1',
    '@Hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@Layout/(.*)': '<rootDir>/src/layout/$1',
    '@Pages/(.*)': '<rootDir>/src/pages/$1',
    '@Providers/(.*)': '<rootDir>/src/providers/$1',
    '@Routes/(.*)': '<rootDir>/src/routes/$1',
    '@Services/(.*)': '<rootDir>/src/services/$1',
    '@Store/(.*)': '<rootDir>/src/store/$1',
    '@Templates/(.*)': '<rootDir>/src/templates/$1',
    '@Tests/(.*)': '<rootDir>/src/tests/$1',
    '@Utils/(.*)': '<rootDir>/src/utils/$1'
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{js, jsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  transform: {
    '.+\\.(js|jsx|mjs)$': 'babel-jest',
    '.+\\.json': '<rootDir>/src/tests/__mocks__/jsonMock.js',
    '.+\\.css$': '<rootDir>/src/tests/__mocks__/cssMock.js',
    '(?!.*\\.(js|jsx|mjs|css)$)': '<rootDir>/src/tests/__mocks__/fileMock.js'
  },
  transformIgnorePatterns: ['/node_modules/(?!react-spotify-api)'],
  verbose: true
});
