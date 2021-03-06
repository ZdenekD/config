module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.js'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/index.js',
        '!src/**/*.stories.js',
        '!src/**/data/*',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    snapshotSerializers: ['jest-serializer-html'],
};
