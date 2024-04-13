import styled from "@emotion/styled";
import ArduinoPage from "./pages/ArduinoPage";
import HamelinPage from "./pages/HamelinPage";
import CodeplayPage from "./pages/CodeplayPage";
import ArtPage from "./pages/ArtPage";
import EngineeringPage from "./pages/EngineeringPage";
import CvPage from "./pages/CvPage";
import Page, { PageLeftSection, PageRightSection } from "./pages/Page";

const AppSection = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url("/src/assets/apecamp.jpg");
  background-size: 1020px;
  background-position-x: -50%;
  background-position-y: -36px;

  padding-top: 160px;
  padding-bottom: 120px;
  padding-left: 120px;
  padding-right: 120px;

  overflow-y: scroll;
`;

const MainSection = styled.main`
  background-color: rgba(255, 255, 255);
  width: 100%;
  min-height: 360px;

  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.1);

  padding-top: 60px;
  padding-bottom: 36px;
  padding-left: 48px;
  padding-right: 48px;
`;

function App() {
  return (
    <AppSection>
      <MainSection>
        <h1>학습하는 기계를 통해, 방황하는 인간을 탐구하는 정종관입니다.</h1>
        <CvPage />
        <ArduinoPage />
        <HamelinPage />
        <CodeplayPage />
        <ArtPage />
        <EngineeringPage />
        <Page>
          <PageLeftSection>
            <h1>마무리 멘트 필요</h1>
            <div>
              Codeplay외에 기술을 예술분야에 적용시켜 본 경험이 아직 부족합니다.
            </div>
            <div>
              작년까지 기술 공부 후 올해 본격적으로 작업 시작해서 전반기까진
              없습니다.
            </div>
            <div>
              그러나 본 과정을 통해 많은 살마들과 얘기를 나누고 싶어서,
              지원했습니다. 감사합니다.
            </div>
          </PageLeftSection>
          <PageRightSection>사진하나?</PageRightSection>
        </Page>
      </MainSection>
    </AppSection>
  );
}

export default App;
