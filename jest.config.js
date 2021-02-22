module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^src/(.*)': '<rootDir>/src/$1',
        '^@components/(.*)': '<rootDir>/src/components/$1',
        '^@api/(.*)': '<rootDir>/src/api/$1',
        '^@icons/(.*)': '<rootDir>/src/assets/icons/$1',
        '^@images/(.*)': '<rootDir>/src/assets/images/$1',
        '^@pages/(.*)': '<rootDir>/src/pages/$1',
        '^@types/(.*)': '<rootDir>/src/types/$1',
        '^@store/(.*)': '<rootDir>/src/store/$1',
        '^@game/(.*)': '<rootDir>/src/game/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
