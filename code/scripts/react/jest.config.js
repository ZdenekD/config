module.exports = {
    verbose: true,
    transform: {
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'jsx'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,jsx}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.{js,jsx}'],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'test', 'lcov'],
    setupFiles: ['<rootDir>/__test__/utils/setup.js'],
    snapshotSerializers: ['jest-serializer-html'],
};
