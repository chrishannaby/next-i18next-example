import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const SecondPage = () => {
  const { t } = useTranslation("client");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <p>This page uses getStaticProps</p>
        <Link href="/">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["footer"])),
  },
});

export default SecondPage;
