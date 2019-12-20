module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts(x)?$': 'ts-jest',
    },
    moduleFileExtensions: [
        'ts',
        'tsx',
    ],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        './assets/scripts/**/*.ts',
        './assets/scripts/**/*.tsx'
    ],
    coverageDirectory: './test/coverage',
    coverageReporters: ['html'],
};
