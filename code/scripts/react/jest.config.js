module.exports = {
    verbose: true,
    moduleFileExtensions: [
        'js',
        'jsx',
    ],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./assets/src/scripts/**/*.jsx'],
    coverageDirectory: './test/coverage',
    coverageReporters: ['html'],
};
