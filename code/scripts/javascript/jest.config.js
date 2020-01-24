module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: './__tests__/coverage',
    coverageReporters: ['html'],
};
