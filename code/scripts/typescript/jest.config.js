module.exports = {
    verbose: true,
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'ts'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,ts}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,ts}',
        '!src/**/*.d.ts',
        '!src/index.{js,ts}',
        '!src/**/*.stories.{js,ts}',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    snapshotSerializers: ['jest-serializer-html'],
};
