import Page, { PageLeftSection, PageRightSection } from "./Page";

const CodeplayPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Codeplay</h1>
        <p>
          네이버 부스트캠프에서 개발한 인공지능 음악 생성 웹 어플리케이션입니다.
          4개월간 팀원들과 기획/자료조사/논문리딩/인공지능학습/웹개발을
          수행하였습니다. 언어모델은 사용자가 입력한 프롬프트로부터 '장르',
          '감정'과 같은 비계량적 요소를 추출합니다. GPT2에 약 2만2천개의 노래를
          학습한 생성모델은 해당 요소에 어울리는 음악을 생성합니다.
        </p>
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
        <img src="/assets/codeplay01.png" alt="Codeplay" width={720} />
      </PageRightSection>
    </Page>
  );
};

export default CodeplayPage;
