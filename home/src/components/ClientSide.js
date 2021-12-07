import { useTranslation } from "next-i18next";

export const ClientSide = () => {
  const { t } = useTranslation("client");

  return <p>{t("client")}</p>;
};
