import Page, { PageLeftSection, PageRightSection } from "./Page";

const ArtPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Art</h1>
        <br />
        <div>Art here</div>
      </PageLeftSection>
      <PageRightSection></PageRightSection>
    </Page>
  );
};

export default ArtPage;
