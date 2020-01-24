module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts(x)?$': 'ts-jest',
    },
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
    coverageDirectory: './__tests__/coverage',
    coverageReporters: ['html'],
};
