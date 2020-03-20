module.exports = {
    verbose: true,
    transform: {
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^(?!.*\\.(js|css|json)$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.js'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js', '!src/index.js'],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html'],
    snapshotSerializers: ['jest-serializer-html'],
};
