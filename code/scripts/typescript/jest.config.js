module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts(x)?$': 'ts-jest',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts', 'tsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.{ts,tsx}',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    setupFiles: ['<rootDir>/src/__test__/utils/enzyme.js'],
    snapshotSerializers: ['jest-serializer-html'],
};
