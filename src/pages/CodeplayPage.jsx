import Page, { PageLeftSection, PageRightSection } from "./Page";

const CodeplayPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Codeplay</h1>
        <p>Codeplay content goes here...</p>
        <p>음악 생성 프로젝트 Codeplay</p>
        <div>
          <a href="https://codeplay-ai.netlify.app">
            https://codeplay-ai.netlify.app
          </a>
        </div>
        <div>
          <a href="https://github.com/boostcampaitech6/level2-3-nlp-finalproject-nlp-07">
            코드플레이 프로젝트 GITHUB PAGE
          </a>
        </div>
      </PageLeftSection>
      <PageRightSection>
        <img src="/src/assets/codeplay01.png" alt="Codeplay" width={720} />
      </PageRightSection>
    </Page>
  );
};

export default CodeplayPage;
