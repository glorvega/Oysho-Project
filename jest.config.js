module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: {
    "^src/environments/environment":
      "<rootDir>/src/environments/environment.ts",
  },
};
