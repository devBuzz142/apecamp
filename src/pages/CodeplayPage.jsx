import styled from "@emotion/styled";
import HashTag from "../components/HashTag";
import Page, { PageLeftSection, PageRightSection } from "./Page";
import YouTube from "react-youtube";

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VideoLabelWrapper = styled.div`
  display: flex;

  align-items: center;
`;

const CodeplayPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>Codeplay</h1>
        <HashTag>
          #프로그래밍 #인공지능 #웹 #음악 #작곡 #인간기계상호작용
        </HashTag>
        <br />
        <div>
          본 프로그램은 네이버 부스트캠프(23.11-24.04)를 수료하며
          개발하였습니다.
        </div>
        <div>
          4개월간 팀원들과 기획/자료조사/논문리딩/인공지능학습/웹개발을
          수행하였습니다.
        </div>
        <br />
        <div>
          GPT와 같은 근래의 인공지능 언어모델은, '언어'라는{" "}
          <b>'기호'를 통해 데이터의 의미</b>를 학습합니다.
        </div>
        <div>
          이에 저희는,
          <span style={{ color: "blue" }}>
            '음악적 기호'를 통해 '음악'의 문맥적 의미를 학습할 수 있을까?
          </span>
          라는 질문에서 시작했습니다.
        </div>
        <br />
        <div>
          <b>
            음악생성 인공지능 {"<"}Codeplay{">"}
          </b>
          은 약 2만개의 MIDI 악보(전자악보)를 톡해 학습한 인공지능 모델입니다.
        </div>
        <div>
          사용자가 입력한 텍스트 프롬프트로부터 장르/분위기와 같은 비계량적
          문맥을 추출합니다. 이러한 비계량적 문맥을 바탕으로, {"<"}Codeplay{">"}
          가 이해한 음악적 이해력으로 MIDI 악보를 생성합니다.
        </div>
        <div>
          사용자는 이렇게 생성된 MIDI 악보를 듣고, 원하는 부분을 수정하거나
          추가하여 자신만의 음악을 만들 수 있습니다.
        </div>
        <br />
        <div>
          이 과정에서,
          <b>인공지능과 예술적 창조과정을 협업하는 경험을 할 수 있습니다.</b>
        </div>
        <br />
      </PageLeftSection>
      <PageRightSection>
        <VideoContainer>
          <br />
          <br />
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
            (부트캠프 측의 GPU 서버 사용기간 만료로, 현재 일부 기능이 제한될 수
            있습니다.)
          </div>
          <br />
          <YouTube
            videoId="PThn811Lli8"
            opts={{
              height: "380",
              width: "540",
            }}
          />
          <VideoLabelWrapper>[ 시연 영상 ]</VideoLabelWrapper>
        </VideoContainer>
      </PageRightSection>
    </Page>
  );
};

export default CodeplayPage;
