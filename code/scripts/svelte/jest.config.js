module.exports = {
    verbose: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': 'jest-transform-svelte',
        '^.+\\.css$': '<rootDir>/__test__/transform/css.js',
        '^.+\\.svg$': '<rootDir>/__test__/transform/svg.js',
        '^(?!.*\\.json$)': '<rootDir>/__test__/transform/file.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|svelte)$', '^.+\\.module\\.(css|sass|scss)$'],
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'svelte'],
    testMatch: ['<rootDir>/src/**/*.{spec,test}.{js,svelte}'],
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,svelte}',
        '!src/index.js',
        '!src/**/*.stories.{js,svelte}',
    ],
    coverageDirectory: './__test__/coverage',
    coverageReporters: ['html', 'lcov'],
    snapshotSerializers: ['jest-serializer-html'],
};
