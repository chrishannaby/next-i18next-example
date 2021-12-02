const i18nextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  backend: {
    backends: process.browser ? [i18nextHttpBackend] : [],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  ns: ["common", "second-page", "footer", "client"],
  partialBundledLanguages: true,
  react: {
    useSuspense: false,
  },
  serializeConfig: false,
  use: process.browser ? [i18nextHttpBackend] : [],
};
