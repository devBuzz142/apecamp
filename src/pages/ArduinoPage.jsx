import styled from "@emotion/styled";
import Page, { PageLeftSection, PageRightSection } from "./Page";
import HashTag from "../components/HashTag";
import { blue } from "@mui/material/colors";

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
        <h1>빔프로젝터 무선 개폐기</h1>
        <HashTag>#프로그래밍 #Arudino #아두이노 #무대장치</HashTag>
        <br />
        <div>
          대학에서 연극 동아리를 통해 연극 작업을 시작했습니다.{" "}
          <span style={{ color: "blue" }}>
            어떻게 무대장치에 컴퓨터공학적 요소를 도입할 수 있을까?
          </span>
          라는 질문에서 시작했습니다.
        </div>
        <br />
        <div>
          무대장치로써 빔프로젝터를 사용하는 경우, 빔프로젝터를 전원을 켜고 끌
          때 생기는 불편함을 해결하고자 아두이노를 활용한 무선 개폐기를
          개발하였습니다.
        </div>
        <br />
        <div>
          아두이노를 활용하여 오퍼레이터가 무선으로 빔프로젝터 렌즈를 열고 닫을
          수 있게 만든 장치입니다.
        </div>
      </PageLeftSection>
      <PageRightSection>
        <VideoContainer>
          <video
            src="/assets/arduino/arduino01.mp4"
            loop
            autoPlay
            muted
            width={320}
          />
          <video
            src="/assets/arduino/arduino02.mp4"
            loop
            autoPlay
            muted
            width={220}
          />
        </VideoContainer>
      </PageRightSection>
    </Page>
  );
};

export default ArduinoPage;
