const GoogleStrategy = require("@drawilet/i18n/strategies/google").default;

module.exports = {
  strategy: new GoogleStrategy("http://212.107.31.118:80"),
  locales: ["es", "en"],
  defaultLocale: "en",

  output_path: __dirname + "/src/locales/",
  cache_path: __dirname + "/cache/i18n.json",

  output_mode: "merged",

  inputs: [__dirname + "/src/pages", __dirname + "/src/components"],
};
