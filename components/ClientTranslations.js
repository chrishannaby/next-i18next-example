import { i18n, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const ClientTranslations = () => {
  const { locale } = useRouter();

  useEffect(() => {
    i18n.addResourceBundle(locale, "client");
  }, []);

  const { t, ready } = useTranslation("client");

  return <p>Greeting from client: {ready ? t("greeting") : loading}</p>;
};
