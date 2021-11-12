import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Post({ id }) {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("h1")}</h1>
      <p>page: {id}</p>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "foo", locale: "en" },
        params: { id: "foo", locale: "de" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      id: params.id,
    },
  };
}
