const baseConfig = require("./index");
const reactConfig = require("./react");

module.exports = {
  ...baseConfig,
  ...reactConfig,
  plugins: [...baseConfig.plugins, ...reactConfig.plugins, "react-native"],
  env: {
    "react-native/react-native": true,
  },
  rules: {
    ...baseConfig.rules,
    ...reactConfig.rules,
    // React Native
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "off",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "warn",
  },
};
