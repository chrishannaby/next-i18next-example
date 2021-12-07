import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import i18nextConfig from "../../next-i18next.config";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Homepage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <p>This page uses getServerSideProps</p>
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
    ...(await serverSideTranslations(
      locale,
      ["common", "footer"],
      i18nextConfig
    )),
  },
});

export default Homepage;
