const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  globals: {
    'ts-jest': {
      tsconfig: 'tests/tsconfig.json', // 👈 Use this custom config for tests
    },
  },
  transform: {
    ...tsJestTransformCfg,
  },
};