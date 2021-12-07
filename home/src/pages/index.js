import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ClientSide } from "../components/ClientSide";

import i18nConfig from "../../next-i18next.config";

const Homepage = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <p>This page uses getServerSideProps</p>
        <ClientSide />
        <div>
          <Link href="/second-page">
            <button type="button">{t("to-second-page")}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"], i18nConfig)),
  },
});

export default Homepage;
