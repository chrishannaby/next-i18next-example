// use cjs instead of default export
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
  localePath: path.resolve("./public/locales"),
  // don't serialize the config
  serializeConfig: false,
  use: typeof window !== "undefined" ? [i18nextHttpBackend] : [],
};
