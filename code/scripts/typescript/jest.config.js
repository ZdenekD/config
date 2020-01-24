module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts(x)?$': 'ts-jest',
        '^.+\\.css$': '<rootDir>/__tests__/transform/css.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/__tests__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
    coverageDirectory: './__tests__/coverage',
    coverageReporters: ['html'],
    setupFiles: ['<rootDir>/__tests__/utils/setup.js'],
};
