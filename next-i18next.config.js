const i18nextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  ns: ["common", "second-page", "footer", "client"],
  partialBundledLanguages: true,
  react: {
    useSuspense: false,
  },
  use: typeof window !== "undefined" ? [i18nextHttpBackend] : [],
};
