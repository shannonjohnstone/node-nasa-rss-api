module.exports = {
  "roots": [
    "<rootDir>/src",
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx)",
    "**/?(*.)+(spec|test).+(ts|tsx)",
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json",
    },
  },
};
