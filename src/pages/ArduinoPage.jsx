import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  video {
    border: 1px solid black;
    border-radius: 10px;
  }
`;

const ArduinoPage = () => {
  return (
    <Page>
      <PageLeftSection>
        <h1>아두이노를 활용한 빔프로젝터 무선 개폐기</h1>
        <p>
          대학에서 연극 동아리를 통해 연극 작업을 시작했습니다. 컴퓨터공학을
          전공하였기에 컴퓨터공학적 요소를 무대 장치에 도입하는 것에 관심을
          가지게됐습니다. (1)은 아두이노를 활용하여 오퍼레이터가 무선으로
          빔프로젝터 렌즈를 열고 닫을 수 있게 만든 장치입니다.
        </p>
      </PageLeftSection>
      <PageRightSection>
        <VideoContainer>
          <video
            src="/assets/arduino/arduino01.mp4"
            loop
            autoPlay
            muted
            width={360}
          />
          <video
            src="/assets/arduino/arduino02.mp4"
            loop
            autoPlay
            muted
            width={240}
          />
        </VideoContainer>
      </PageRightSection>
    </Page>
  );
};

export default ArduinoPage;
