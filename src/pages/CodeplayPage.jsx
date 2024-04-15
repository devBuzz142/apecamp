import HashTag from "../components/HashTag";
import Page, { PageLeftSection, PageRightSection } from "./Page";
import YouTube from "react-youtube";

const CodeplayPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Codeplay</h1>
        <HashTag>#프로그래밍 #인공지능 #웹 #음악 #작곡</HashTag>
        <br />
        <div>네이버 부스트캠프(23.11-24.04)를 수료하며 개발하였습니다.</div>
        <div>
          4개월간 팀원들과 기획/자료조사/논문리딩/인공지능학습/웹개발을
          수행하였습니다.
        </div>
        <div>
          언어모델은 사용자가 입력한 프롬프트로부터 '장르', '감정'과 같은
          비계량적 요소를 추출합니다. GPT2에 약 2만2천개의 노래를 학습한
          생성모델은 해당 요소에 어울리는 음악을 생성합니다.
        </div>
        <div>
          <a href="https://codeplay-ai.netlify.app">
            웹사이트 링크 - https://codeplay-ai.netlify.app
          </a>
        </div>
        <div>
          <a href="https://github.com/boostcampaitech6/level2-3-nlp-finalproject-nlp-07">
            코드플레이 프로젝트 GITHUB PAGE
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/watch?v=PThn811Lli8">
            시연 영상 - https://www.youtube.com/watch?v=PThn811Lli8
          </a>
        </div>
      </PageLeftSection>
      <PageRightSection>
        <YouTube videoId="PThn811Lli8" />
      </PageRightSection>
    </Page>
  );
};

export default CodeplayPage;
