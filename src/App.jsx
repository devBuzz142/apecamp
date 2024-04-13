import styled from "@emotion/styled";
import ArduinoPage from "./pages/ArduinoPage";
import HamelinPage from "./pages/HamelinPage";
import CodeplayPage from "./pages/CodeplayPage";
import ArtPage from "./pages/ArtPage";
import EngineeringPage from "./pages/EngineeringPage";
import CvPage from "./pages/CvPage";

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
        <CvPage />
        <ArduinoPage />
        <HamelinPage />
        <CodeplayPage />
        <ArtPage />
        <EngineeringPage />
      </MainSection>
    </AppSection>
  );
}

export default App;
