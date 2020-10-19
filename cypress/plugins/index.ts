import loadWebpack from "cypress-react-unit-test/plugins/load-webpack";

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  config.env.webpackFilename = "webpack.config.js";
  loadWebpack(on, config);

  return config;
};

export default pluginConfig;
