const i18nextHttpBackend = require("i18next-http-backend/cjs");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  partialBundledLanguages: true,
  react: {
    useSuspense: false,
  },
  serializeConfig: false,
  use: typeof window !== "undefined" ? [i18nextHttpBackend] : [],
};
