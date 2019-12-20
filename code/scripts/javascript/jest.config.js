module.exports = {
    verbose: true,
    moduleFileExtensions: ['js'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./assets/src/scripts/**/*.js'],
    coverageDirectory: './test/coverage',
    coverageReporters: ['html'],
};
