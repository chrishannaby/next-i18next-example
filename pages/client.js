const ClientPage = () => {
  const { t, ready } = useTranslation("client-page");

  return (
    <>
      <main>
        <Text>{ready ? t("h1") : ""}</Text>
      </main>
      <Footer />
    </>
  );
};

export default ClientPage;
